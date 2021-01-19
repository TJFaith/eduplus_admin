<?php 

// exit();

use Illuminate\Http\Request;
use Models\subject;
use Models\question;
use Models\instruction;
use Models\option;

// include_once "../database.php";

// include './autoloader/inc.php';
class queryController
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

    public function addSubject($data){
        $sub_id = $this->generateId('sub');
        $newSubejct = new subject;
        $newSubejct->subject_id = $sub_id;
        $newSubejct->subject = $data['selectedSubject'];
        $newSubejct->subject_category = $data['science'].$data['art'].$data['commercial'];
        $newSubejct->save();
    }

  
    public function getAllQuestions($data){
     echo question::orderBy('question_id','desc')->where('subject_id',$data['subject_id'])->get();

    }

    public function getAnswer($data){
            echo option::where('question_id',$data['question_id'])->where('option_id',$data['answer_id'])->get();   
    }

    public function getOneQuestion($data){
        echo question::where('question_id',$data['question_id'])->get();   
    }

    public function getOptions($data){
       echo option::where('option_id',$data['answer_id'])->get();
    }
    
    public function getQuestionOptions($data){
        echo option::where('question_id',$data['question_id'])->get();
    }

public function saveOptions($data){
            $option = new option;
            $option-> question_id = $data['question_id'];
            $option-> options = $data['options'];
            $option->save();
    }

    public function updateOption($data){
           option::where('option_id',$data['option_id'])->update(['options'=> $data['options']]);
    }
    
    public function deleteOption($data)
    {
        option::where('option_id', '=', $data['option_id'])->delete();

    }



    // Instruction
    public function getInstructions($data){
        echo instruction::where('subject_id',$data['subject_id'])->get();
    }


    public function saveInstruction($data){
        if (instruction::where('instruction_id', '=', $data['instruction_id'])->exists()) {
           instruction::where('instruction_id',$data['instruction_id'])->update(['instruction'=> $data['instruction']]);
        }else{
            $instruction = new instruction;
            $instruction-> subject_id = $data['subject_id'];
            $instruction-> instruction_id = $data['instruction_id'];
            $instruction-> instruction = $data['instruction']; 
            $instruction->save();
        }
    }
    public function deleteInstruction($data){
        instruction::where('instruction_id',$data['instruction_id'])->delete();
        question::where('instruction_id',$data['instruction_id'])->update(['instruction'=>'']);
    }

    public function save_question($data){
        if (question::where('question_id', '=', $data['question_id'])->exists()) {
            question::where('question_id', '=', $data['question_id'])->update([
                    'questions'=>$data['questions'],
                    'instruction_id'=>$data['instruction_id'],
                    'answers_id'=>$data['answers_id'],
            ]);

         }else{

        $question = new question;
        $question-> question_id = $data['question_id'];
        $question-> subject_id = $data['subject_id'];
        $question-> questions = $data['questions'];
        $question-> instruction_id = $data['instruction_id'];
        $question->save();

               
    }

        // select option
        $option_arr= option::where('question_id',$data['question_id'])->get();
        foreach ($option_arr as $key => $opt_arr) {
            if($opt_arr['options'] == $data['answer']){
                question::where('question_id', '=', $opt_arr['question_id'])->update(['answers_id'=>$opt_arr['option_id']]);
            }
        }

        echo 'success';
    }


    public function deleteQuestion($data){
       question::where('question_id', '=', $data['question_id'])->delete();
       option::where('question_id', '=', $data['question_id'])->delete();
    }
}
   
?>



