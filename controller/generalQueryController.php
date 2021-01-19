<?php 

use Illuminate\Http\Request;

use Models\question;
use Models\primary_question;
use Models\user;
use Models\certification;
use Models\certification_category;

class generalQueryController
{
    public function dashBoardCount(){
        $countJuniorQuestion = question::count();  
        $countPrimaryQuestion = primary_question::count();  
        $countUsers =  user::count();

        $countQuestion = $countJuniorQuestion + $countPrimaryQuestion;
        $countedData = array(
            'totalQuestion'  =>  $countQuestion,
            'totalStudent'   =>  $countUsers,
        );
        echo json_encode($countedData);
     }

     public function login($data){
        $aut = user::where('name', $data['username'])->orWhere('email', $data['username'])->where('admin_status','userAdmin')->get();
        if (!count($aut)) {
            // $html_doc->title = "testtitle";
            echo json_encode('<span class="text-danger">Incorrect Username</span>');
        }else{
            foreach ($aut as $key => $value) {
                $hashed_password = $value['password'];            

                if(password_verify($data['password'], $hashed_password)) {
                    echo json_encode(array(
                    'respond'=>'success',
                    'admsin_data'=>$aut,
                ));
                } else{
                    echo json_encode('<span class="text-danger">Incorrect Password</span>');
                }
            }

        }

        //  $hash_password = password_hash($data['password'], PASSWORD_BCRYPT);
      
     
        // $datau = user::find($data, ['name', 'password']);
      

        // $hash = password_hash("rasmuslerdorf", PASSWORD_BCRYPT);
         
        //  if (password_verify ("rasmuslerdor" ,  $hash ))
        //     {
        //         echo json_encode('password ok');
        //     }
     }

    // private methods
     private function imageProcessing(){
         // upload icon
     if(isset($_FILES['file']['name'])){
        $name = $_FILES['file']['name'];
        $target_dir = "upload/";
        $target_file = $target_dir . basename($_FILES["file"]["name"]);
      
        // Select file type
        $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

        // Valid file extensions
        $extensions_arr = array("jpg","jpeg","png","gif");

        // Check extension
        if( in_array($imageFileType,$extensions_arr) ){
               
            // Convert to base64 
            $image_base64 = base64_encode(file_get_contents($_FILES['file']['tmp_name']) );
           return $image = 'data:image/'.$imageFileType.';base64,'.$image_base64;
          }

        }else{
            return $image = $_POST['c_logo'];
        } 
     }

     private function responseMessage(){
        $resp = array('response'=>'success');
        return json_encode($resp);
     }

    //  public methods
     public function newCertification(){
            // Insert record
            $certification = new certification;
            $certification -> c_title = $_POST['c_title'];
            $certification -> c_organizationName = $_POST['c_organizationName'];
            $certification -> c_webAddress = $_POST['c_webAddress'];
            $certification -> c_emailAddress = $_POST['c_emailAddress'];
            $certification -> c_officeAddress = $_POST['c_officeAddress'];
            $certification -> c_mobileNumber = $_POST['c_mobileNumber'];
            $certification -> c_facebook = $_POST['c_facebook'];
            $certification -> c_twitter = $_POST['c_twitter'];
            $certification -> c_instagram = $_POST['c_instagram'];
            $certification -> c_youtube = $_POST['c_youtube'];
            $certification -> c_logo = $this->imageProcessing(); 
            $certification -> c_description = $_POST['c_description'];
            $certification -> c_category = $_POST['c_category'];
            $certification -> save();
            echo $this->responseMessage();
     }

     public function updateCertifiction(){
        certification::where('ID', '=', $_POST['ID'])->update([
            'c_title'               =>  $_POST['c_title'],
            'c_organizationName'    =>  $_POST['c_organizationName'],
            'c_webAddress'          =>  $_POST['c_webAddress'],
            'c_emailAddress'        =>  $_POST['c_emailAddress'],
            'c_officeAddress'       =>  $_POST['c_officeAddress'],
            'c_mobileNumber'        =>  $_POST['c_mobileNumber'],
            'c_facebook'            =>  $_POST['c_facebook'],
            'c_twitter'             =>  $_POST['c_twitter'],
            'c_instagram'           =>  $_POST['c_instagram'],
            'c_youtube'             =>  $_POST['c_youtube'],
            'c_logo'                =>  $this->imageProcessing(),
            'c_description'         =>  $_POST['c_description'],
            'c_category'            =>  $_POST['c_category'],
    ]);
    echo $this->responseMessage();

     }

     public function getData($data){
        // echo certification::orderBy('ID','DESC')->get();
        echo json_encode(certification::latest()->whereBetween('id',[$data['startRange'],$data['endRange']])->get());

     }


     public function delete_Data($data)
     {
         echo json_encode($data);
         certification::where('ID', '=', $data)->delete();
 
     }

    //  get all certification category
     public function c_category(){
        echo certification_category::orderBy('c_name','ASC')->get();
     }

    //  add new certification  category
    public function c_add_category($data){
        $new_c_category = new certification_category;
        $new_c_category -> c_name = $data['c_name'];
        $new_c_category -> save();
        echo $this->responseMessage();
        
    }

    // update certification category
    public function c_update_category($data){
        certification_category::where('c_ID', '=', $data['c_id'])->update([
            'c_name'               =>  $data['c_name'],
             ]);
             echo $this->responseMessage();
    }

    // delete certification category
    public function c_delete_category($data){
        certification_category::where('c_ID', '=', $data['c_id'])->delete();
        echo $this->responseMessage();
    }
    
    public function search_filter($data){
       
        if( isset($data['c_id'])){
            echo certification::where('c_organizationName', 'LIKE', '%'.$data['c_value'].'%')
                        ->where('c_category',$data['c_id'])->orderBy('ID','DESC')
                        ->get();
        }else{
            echo certification::where('c_organizationName', 'LIKE', '%'.$data['c_value'].'%')->orderBy('ID','DESC')->get();
        }   
    }



    public function totalCertificationPost(){
        echo json_encode(certification::count());
    }
}
?>