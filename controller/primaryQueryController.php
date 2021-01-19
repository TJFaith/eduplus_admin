<?php 

// exit();

use Illuminate\Http\Request;

// primary models
use Models\primary_subject;
use Models\primary_question;
use Models\primary_instruction;
use Models\primary_option;


// include_once "../database.php";

// include './autoloader/inc.php';
class primaryQueryController
{
       
    private function generateId($id_type){
        // CODE TO GENERATE ID
        $token = 'qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
        $token = str_shuffle($token);
        $token = substr($token,  0,  2);
        $current_date = date('Ymd');
        return $token = $id_type.'_'.$token.$current_date;
    }

    public function getAllSubject(){
        echo subject::orderBy('subject','asc')->get();
    }
    public function get_Primary_Subject(){
        $primary_subject_array  = array();
         $primary_subject = primary_subject::orderBy('created_at','desc')->get();

        //  code to do total question count base on a subjct 
        foreach ($primary_subject as $value) {
            $primary_question = primary_question::where('subject_id', $value->primary_subject_id)->count();
            array_push($primary_subject_array, array(
                'primary_subject_id'  => $value->primary_subject_id,
                'primary_subject' => $value->primary_subject,
                'total_question'    => $primary_question,
            ));

            
        }
        echo json_encode($primary_subject_array);

    }

    public function add_Primary_Subject($data){
        $sub_id = $this->generateId('p_sub');
        $newSubejct = new primary_subject;
        $newSubejct->primary_subject_id = $sub_id;
        $newSubejct->primary_subject = $data['primary_subject'];
        $newSubejct ->save();
    }
    public function delete_Primary_Subject($data){
        primary_subject::where('primary_subject_id',  $data['primary_subject_id'])->delete();
        $select_question=primary_question::select('question_id')->where('subject_id',  $data['primary_subject_id'])->get();
        foreach ($select_question as $question) {
            primary_options::where('question_id',  $question->question_id)->delete();
        }
        primary_question::where('subject_id',  $data['primary_subject_id'])->delete();

    }

    public function update_Primary_Subject($data){
        primary_subject::where('primary_subject_id',  $data['primary_subject_id'])->update(['primary_subject'=> $data['primary_subject']]);
    }

    public function addSubject($data){
        $sub_id = $this->generateId('sub');
        $newSubejct = new subject;
        $newSubejct->subject_id = $sub_id;
        $newSubejct->subject = $data['selectedSubject'];
        $newSubejct->subject_category = $data['science'].$data['art'].$data['commercial'];
        $newSubejct->save();
    }

  
    public function getAllQuestions($data){
     echo primary_question::orderBy('question_id','desc')->where('subject_id',$data['subject_id'])->get();
    }

    public function getAnswer($data){
            echo primary_option::where('question_id',$data['question_id'])->where('option_id',$data['answer_id'])->get();   
    }

    public function getOneQuestion($data){
        echo primary_question::where('question_id',$data['question_id'])->get();
    }

    public function getOptions($data){
       echo primary_option::where('option_id',$data['answer_id'])->get();
    }
    
    public function getQuestionOptions($data){
        echo primary_option::where('question_id',$data['question_id'])->get();
    }

public function saveOptions($data){
            $option = new primary_option;
            $option-> question_id = $data['question_id'];
            $option-> options = $data['options'];
            $option->save();
    }

    public function updateOption($data){
        primary_option::where('option_id',$data['option_id'])->update(['options'=> $data['options']]);
    }
    
    public function deleteOption($data)
    {
        primary_option::where('option_id', '=', $data['option_id'])->delete();

    }

    // Instruction
    public function getInstructions($data){
        echo primary_instruction::where('subject_id',$data['subject_id'])->get();
    }

    public function saveInstruction($data){
        if (primary_instruction::where('instruction_id', '=', $data['instruction_id'])->exists()) {
            primary_instruction::where('instruction_id',$data['instruction_id'])->update(['instruction'=> $data['instruction']]);
        }else{
            $instruction = new primary_instruction;
            $instruction-> subject_id = $data['subject_id'];
            $instruction-> instruction_id = $data['instruction_id'];
            $instruction-> instruction = $data['instruction']; 
            $instruction->save();
        }
    }
    public function deleteInstruction($data){
        primary_instruction::where('instruction_id',$data['instruction_id'])->delete();
        primary_question::where('instruction_id',$data['instruction_id'])->update(['instruction_id'=>'']);
    }

    public function save_question($data){
        if (primary_question::where('question_id', '=', $data['question_id'])->exists()) {
            print_r($data);
            primary_question::where('question_id', '=', $data['question_id'])->update([
                    'questions'=>$data['questions'],
                    'instruction_id'=>$data['instruction_id'],
                    'answers_id'=>$data['answers_id'],
            ]);

         }else{

        $question = new primary_question;
        $question-> question_id = $data['question_id'];
        $question-> questions = $data['questions'];
        $question-> answers_id = $data['answers_id'];
        $question-> subject_id = $data['subject_id'];
        $question-> instruction_id = $data['instruction_id'];
        $question->save();

               
    }


        echo 'success';
    }


    public function deleteQuestion($data){
        primary_question::where('question_id', '=', $data['question_id'])->delete();
        primary_option::where('question_id', '=', $data['question_id'])->delete();
    }
}
   
?>



