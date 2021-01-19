<?php
header('Access-Control-Allow-Origin: ' .$_SERVER['HTTP_ORIGIN']);
header('Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');
header("Content-Type:application/json, Access-Control-Allow-Origin:*");
header("Content-Type:multipart/form-data, Access-Control-Allow-Origin:*");


include_once "../database.php";
include_once "../controller/juniorQueryController.php";

$controllerQuery = new juniorQueryController();


// QUERY REQUEST STARTS ===================
$result = array('error'=>false);
$action = '';

if(isset($_GET['action'])){
    $action = $_GET['action'];
}

// ================================ API FOR  *********  SUBJECTS **********
if($action == 'get_junior_Subject'){
   $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->get_junior_AllSubject());
}

if($action =='add_junior_Subject'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->add_junior_Subject($query));
}

// delete_Primary_Subject
if($action == 'delete_junior_Subject'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->delete_junior_Subject($query));
}

// update_Primary_Subject
if($action == 'update_junior_Subject'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->update_Junior_Subject($query));
}
// =================================END OF API FOR *********  SUBJECTS **********

// ================================ API FOR  *********  QUESTIONS **********
if($action == 'getAllQuestions'){
   
       $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getAllQuestions($query));
    }

    // =================================END OF API FOR *********  QUESTIONS **********

    // ================================ API FOR  *********  INSTRUCTION **********
    if($action == 'getInstructions'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getInstructions($query));
    }
    // =================================END OF API FOR *********  INSTRUCTION **********

    // ================================ API FOR  ********* UPDATE INSTRUCTION **********
    if($action == 'saveInstruction'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->saveInstruction($query));
    }
 // =================================END OF API FOR ********* UPDATE INSTRUCTION **********

   // ================================ API FOR  ********* UPDATE INSTRUCTION **********
   if($action == 'save_question'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->save_question($query));
}

if($action == 'deleteInstruction'){
    $query = json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->deleteInstruction($query));
}

// =================================END OF API FOR ********* UPDATE INSTRUCTION **********

    if($action=='deleteQuestion'){
    $query =json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->deleteQuestion($query));
    }

    if($action=='getOneQuestion'){
    $query =json_decode(file_get_contents("php://input"),true);
    return json_encode($controllerQuery->getOneQuestion($query));

    }

    if($action == 'getAnswer'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getAnswer($query));
    }


    // API FOR OPTION
    if($action == 'getOptions'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getOptions($query));
    }

    if($action == 'getQuestionOptions'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->getQuestionOptions($query));
    }

    if($action =='saveOptions'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->saveOptions($query));
    }

    if($action =='updateOption'){
        $query = json_decode(file_get_contents("php://input"),true);
        return json_encode($controllerQuery->updateOption($query));
    }


    ?>

