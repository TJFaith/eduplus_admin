<?php 

use Illuminate\Http\Request;

use Models\subject;
use Models\question;
use Models\instruction;
use Models\option;

class juniorQueryController
{
        
    private function generateId($id_type){
        // CODE TO GENERATE ID
        $token = 'qwertzuiopasdfghjklyxcvbnmABCDEFGHIJKLMNOPQRSTUVWXYZ123456789abcdefghijklmnopqrstuvwxyz';
        $token = str_shuffle($token);
        $token = substr($token,  0,  2);
        $current_date = date('Ymd');
        return $token = $id_type.'_'.$token.$current_date;
    }

    // METHOD FOR ALL SUBJECTS ===========================================================================================
    public function get_junior_AllSubject(){
        $subject_array  = array();
        $subject = subject::orderBy('created_at','desc')->get();

       //  code to do total question count base on a subjct 
       foreach ($subject as $value) {
           $question = question::where('subject_id', $value->subject_id)->count();
           array_push($subject_array, array(
               'subject_id'  => $value->subject_id,
               'subject' => $value->subject,
               'subject_category' => $value->subject_category,
               'total_question'    => $question,
           ));

           
       }
       echo json_encode($subject_array);
    }
    

    public function add_junior_Subject($data){
        $sub_id = $this->generateId('sub');
        $newSubejct = new subject;
        $newSubejct->subject_id = $sub_id;
        $newSubejct->subject = $data['subject'];
        $newSubejct->subject_category = $data['subject_category'];
        $newSubejct->save();
    }

    public function delete_junior_Subject($data){
        subject::where('subject_id',  $data['subject_id'])->delete();
        $select_question=question::select('question_id')->where('subject_id',  $data['subject_id'])->get();
        foreach ($select_question as $question) {
            option::where('question_id',  $question->question_id)->delete();
        }
        question::where('subject_id',  $data['subject_id'])->delete();

    }

    public function update_junior_Subject($data){
        subject::where('subject_id',  $data['subject_id'])->update([
            'subject'=> $data['subject'],
            'subject_category'=> $data['subject_category'],
            ]);
    }
  
    public function getAllQuestions($data){
        $allquestion =array();
        $answer='';
     $question = question::orderBy('created_at','desc')->where('subject_id',$data['subject_id'])->get();
     foreach ($question as $qst) {
        $option = option::where('question_id', $qst->question_id)->get();
        $answers = option::select('options')->where('option_id',  $qst->answers_id)->get();
        $instruction = instruction::select('instruction')->where('instruction_id', $qst->instruction_id)->first();
        foreach ($answers as $ans) {
           $answer = $ans->options;
        }
           array_push($allquestion, array(
               'answers_id'         =>      $qst->answers_id,
               'answer'             =>      $answer,
               'instruction_id'     =>      $qst->instruction_id,
               'instruction'        =>      $instruction['instruction'],
               'question_id'        =>      $qst->question_id,
               'questions'          =>      $qst->questions,
               'subject_id'         =>      $qst->subject_id,
               'options'            =>      $option,
           ));

          
           

     }
     echo json_encode($allquestion);

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
        
        $delOpt = option::where('option_id',  $data['option_id'])->first();
        if ($delOpt){
            option::where('option_id',  $data['option_id'])->delete();
            echo 1;
        }else{
            echo 2;
        }
      

    }



    // Instruction
    public function getInstructions($data){
        echo instruction::orderBy('created_at','desc')->where('subject_id',$data['subject_id'])->get();
    }


    public function saveInstruction($data){
        if ($data['instruction_id'] != '') {
           $instruction = instruction::where('instruction_id',$data['instruction_id'])->update(['instruction'=> $data['instruction']]);
           if($instruction){
               echo 2;
            }
        }else{
            $instruction = new instruction;
            $instruction-> subject_id = $data['subject_id'];
            $instruction-> instruction_id = $this->generateId('ins');
            $instruction-> instruction = $data['instruction']; 
            if($instruction->save()){
                echo 1;
            }
        }
    }
    public function deleteInstruction($data){
        $delete = instruction::where('instruction_id',$data['instruction_id'])->delete();
        if($delete){
            question::where('instruction_id',$data['instruction_id'])->update(['instruction_id'=>'']);
            echo 1;
        }

    }


    // question

    public function save_question($data){
        // check if question alreay exist
        $question = question::where('question_id', $data['question_id'])->first();
        if($question){
            // update data
            question::where('question_id',  $data['question_id'])->update([
                'questions'=> $data['question'],
                'instruction_id'=> $data['instruction_id'],
                'answers_id'=> $data['answers_id'],
                ]);

            // update Option
            foreach ($data['options'] as $opt) {
                $option = option::where('option_id',$opt['option_id'])->first();
                if($option){
                    option::where('option_id',$opt['option_id'])->update([
                       'options' => $opt['options']
                    ]);
                }else{
                    foreach ($data['options'] as $opt) {
                        $option = new option;
                        $option->option_id = $opt['option_id'];
                        $option->options = $opt['options'];
                        $option->question_id = $data['question_id'];
                        $option->instruction_id = $data['instruction_id'];
                        $option->save();
                      }
                }
            }
            echo 1;
        }else{

        // save Question
        $question = new question;
        $question-> question_id     = $data['question_id'];
        $question-> subject_id      = $data['subject_id'];
        $question-> questions       = $data['question'];
        $question-> instruction_id  = $data['instruction_id'];
        $question-> answers_id      = $data['answers_id'];

        // save option
      foreach ($data['options'] as $opt) {
        $option = new option;
        $option->option_id = $opt['option_id'];
        $option->options = $opt['options'];
        $option->question_id = $data['question_id'];
        $option->instruction_id = $data['instruction_id'];
        $option->save();
      }
        
        if($question->save()){
            echo 1;
        }else{
            echo 2;
        }
    }
    }


    public function deleteQuestion($data){
       question::where('question_id', $data['question_id'])->delete();
       option::where('question_id', $data['question_id'])->delete();
    }
}
   
?>



