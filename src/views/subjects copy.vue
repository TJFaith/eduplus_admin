<template>
    <div class="container ">
        <div class="pageLayout row d-flex justify-content-center text-white">

<!-- ===========================  PRIMARY SCHOOL ASSESSMENT-->

            <div class="col-5 m-4 text-center category_card">
                <div class="row h-25 bg-success">
                    <div class="col-12 align-self-center"><h4>Primary School Assessment</h4></div></div>
                    <hr>
                <div class="row h-80 bg-success shadow shadow-sm">
                    <div class="col-12 align-self-center">
                         <label class="text-white" >SUBJECT TITLE</label>
                         <p class="text-white"><i>Select one subject title or create new one</i></p>
                       <div :class="{'d-none':primary_hideError}" class="alert alert-danger">{{error_message}}</div>
                       <select @change="hideError=true" v-model="p_selected_subject" class="custom-select" size="4" name="subject-title" id="">
                            <option value="0">===Select subject title===</option>
                            <option    v-for="(primary_subject, index) in primary_allSubjects" :key="index" :value="{id:primary_subject.primary_subject_id,text:primary_subject.primary_subject}">{{primary_subject.primary_subject}}</option>
                           
                        </select>
                     <div class="text-white mt-2">SELECTED SUBJECT: <br>{{p_selected_subject.text}}</div>
                   <span @click="primaryModel=true"  data-toggle="modal"  class="my-3 mx-3 btn btn-danger">Add new Subject<i class="ml-2 fas fa-plus"></i></span>
                   <span @click="primaryModel=true"  data-toggle="modal"  class="my-3 btn btn-danger">Edit Subject<i class="ml-2 fas fa-pen"></i></span>
 </div></div>
            </div>
            
<!-- ===========================  JUNIOR SCHOOL ASSESSMENT-->
            <div class="col-5 m-4 text-center category_card">
                <div class="row h-25 bg-danger">
                    <div class="col-12 align-self-center"><h4>Junior Sechool Assessment</h4></div></div>
                    <hr>
                  <div class="row pb-4 bg-light shadow shadow-sm">
                    <div class="col-12 align-self-center">
                            
                       <label class="text-muted" >SUBJECT TITLE</label>
                       <p class="text-muted"><i>Select one subject title or create new one</i></p>
                       <div :class="{'d-none':hideError}" class="alert alert-danger">{{error_message}}</div>
                        <select @change="hideError=true" v-model="addSubject.selectedSubject" class="custom-select" size="4" name="subject-title" id="">
                            <option value="0">===Select subject title===</option>
                            <option    v-for="(subject, index) in allSubjects" :key="index" :value="{id:subject.subject_id,text:subject.subject}">{{subject.subject}}</option>
                           
                        </select>
                       
                   <div class="text-danger mt-2">SELECTED SUBJECT: <br>{{addSubject.selectedSubject.text}}</div>
                  
                   <span @click="showModel=true"  data-toggle="modal" data-target="#newSubject"  class="mt-2 btn btn-danger">Add new Subject<i class="ml-2 fas fa-plus"></i></span>

                   

                   
                    </div></div>
                   
            </div>

        </div>
      



<!-- MODAL -->
         <!-- New Subject model for Junior Secondary School -->
   <div id="overlay" v-if="showModel">
            <div class="modal-dialog" style="margin-top:15%">
                <div class="modal-content">
                    <form action="" @submit.prevent="addSubjectMtd">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Subject</h5>
                        <button type="button" class="close" @click="showModel=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group">
                        
                        <div class="inpute-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-heading"></i>
                                </span>
                                <input @keyup="errorReport = null" v-model="addSubject.selectedSubject" required class="form-control" type="text" name="" id="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-danger">
                                {{errorReport}}
                        
                    </div>
                    <div class="from-group mt-2">
                        <label for="checkbox">Subject Category</label><br>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory" type="checkbox" value="s" class="mr-2">Science
                        </label>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory" type="checkbox" value="c" class="mr-2">Commercial
                        </label>
                        
                        <label class="checkbox-inline mr-3">
                            <input v-model="subjectCategory"  type="checkbox" value="a" class="mr-2">Art
                        </label>
                    </div>

                       <!-- end of body -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModel=false" >Close</button>
                        <button type="submit" class="btn btn-primary">
                            <span> {{feedBack}} </span>
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

<!-- end -->


         <!-- New PRIMARY Subject model for Junior Secondary School -->
   <div id="overlay" v-if="primaryModel">
            <div class="modal-dialog" style="margin-top:15%">
                <div class="modal-content">
                    <form action="" @submit.prevent="add_Primary_Subject">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Subject</h5>
                        <button type="button" class="close" @click="primaryModel=false">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body p-4">
                       <!-- body -->
                    <!-- Compose new subject title  -->
                    <div class="from-group">
                        
                        <div class="inpute-group">
                            <div class="input-group-prepend">
                                <span class="input-group-text">
                                    <i class="fas fa-heading"></i>
                                </span>
                                <input @keyup="primary_errorReport = null" v-model="add_primary_subject.subject_title" required class="form-control" type="text" name="" id="">
                            </div>
                        </div>
                    </div>
                    <div class="form-group text-danger">
                                {{primary_errorReport}}
                        
                    </div>
                  

                       <!-- end of body -->
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="primaryModel=false" >Close</button>
                        <button type="submit" class="btn btn-primary">
                            <span> {{feedBack}} </span>
                            <i v-if="!showSpinner" class="fa fa-spinner fa-spin" style="font-size:24px"></i> </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>

<!-- end -->

<!-- DIALOGUE FOR EDITING SUBJECT -->
 <v-dialog
      v-model="dialog"
      width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Use Google's location service?</span>
        </v-card-title>
        <v-card-text>
          Lorem ipsum dolor sit amet, semper quis, sapien id natoque elit. Nostra urna at, magna at neque sed sed ante imperdiet, dolor mauris cursus velit, velit non, sem nec. Volutpat sem ridiculus placerat leo, augue in, duis erat proin condimentum in a eget, sed fermentum sed vestibulum varius ac, vestibulum volutpat orci ut elit eget tortor. Ultrices nascetur nulla gravida ante arcu. Pharetra rhoncus morbi ipsum, nunc tempor debitis, ipsum pellentesque, vitae id quam ut mauris dui tempor, aptent non. Quisque turpis. Phasellus quis lectus luctus orci eget rhoncus. Amet donec vestibulum mattis commodo, nulla aliquet, nibh praesent, elementum nulla. Sit lacus pharetra tempus magna neque pellentesque, nulla vel erat.
          Justo ex quisque nulla accusamus venenatis, sed quis. Nibh phasellus gravida metus in, fusce aenean ut erat commodo eros. Ut turpis, dui integer, nonummy pede placeat nec in sit leo. Faucibus porttitor illo taciti odio, amet viverra scelerisque quis quis et tortor, curabitur morbi a. Enim tempor at, rutrum elit condimentum, amet rutrum vitae tempor torquent nunc. Praesent vestibulum integer maxime felis. Neque aenean quia vitae nostra, tempus elit enim id dui, at egestas pulvinar. Integer libero vestibulum, quis blandit scelerisque mattis fermentum nulla, tortor donec vestibulum dolor amet eget, elit nullam. Aliquam leo phasellus aliquam curabitur metus a, nulla justo mattis duis interdum vel, mollis vitae et id, vestibulum erat ridiculus sit pulvinar justo sed. Vehicula convallis, et nulla wisi, amet vestibulum risus, quam ac egestas.
          Et vitae, nulla gravida erat scelerisque nullam nunc pellentesque, a dictumst cras augue, purus imperdiet non. Varius montes cursus varius vel tortor, nec leo a qui, magni cras, velit vel consectetuer lobortis vel. Nibh erat et wisi felis leo porttitor, sapien nibh sapien pede mi, sed eget porttitor, repellendus arcu ac quis. Luctus vulputate aut est sem magna, placerat accumsan nunc vestibulum ipsum ac auctor, maecenas lorem in ut nec mauris tortor, doloribus varius sem tortor vestibulum mollis, eleifend tortor felis tempus lacus eu eu. Eleifend vel eu, nullam maecenas mauris nec nunc euismod, tortor porta ridiculus potenti, massa tristique nam magna, et wisi placerat et erat ante. Eget pede erat in facilisis, fermentum venenatis sodales. Ac tortor sociis et non animi tristique, rhoncus malesuada, ut arcu volutpat scelerisque sollicitudin, elit curabitur dui pede purus dolor, integer aenean risus taciti nulla eleifend accumsan. At pulvinar diam parturient, interdum mi velit aliquet et a. Arcu at ac placerat eget justo semper, purus sociis curabitur mi ipsum consequat ut, mollis vestibulum, est ante ornare lacus sem. Neque magna mauris, commodo quisque, praesent semper suscipit lobortis nam. Justo malesuada cursus ac nunc litora nunc. Tellus ac, in lobortis nunc, montes lectus purus fermentum.
          Ac sit wisi. Sodales aliquam, sed vestibulum nullam arcu sit risus arcu, id luctus vitae lorem nibh, integer nec nullam class cursus mi, purus arcu lectus. Vel ante suscipit volutpat potenti mattis sed, wisi eu placerat aliquam erat, lectus morbi lobortis at assumenda. Consequat neque purus ipsum voluptas odio, netus vestibulum ut nec, suspendisse pellentesque nec enim in. Wisi dictum sed semper a, ipsum erat tellus habitasse est, erat sem ornare, vitae quisque ultricies. Dui sed blandit. Tempor et faucibus justo sed luctus, nec vitae vitae. Nunc nibh pede, ipsum vestibulum aenean leo ante ultricies, nam cras quis sed penatibus amet. In mauris a. Integer metus mauris tortor, et rutrum vestibulum ultricies, ut phasellus in ullamcorper ut mollit, eu justo. Cursus pretium venenatis.
          Cras pellentesque vel sodales accumsan aenean. Feugiat metus sit nec in aliquet amet, porttitor pretium vulputate massa. Consequat ipsum luctus quisque adipiscing libero. Wisi sollicitudin. Eget vitae ac lobortis, lorem natoque vestibulum et, aliquet faucibus at morbi nibh, vel condimentum. Massa unde orci sed id sed, odio donec congue nec praesent amet. Hymenaeos velit lacus, quis vivamus libero tempus duis, eu nisi eu, ipsum at accumsan pede justo morbi donec, massa et libero sit risus neque tortor. Ut sed sed etiam hendrerit dapibus, quis metus suspendisse nibh.
          Fringilla tempor felis augue magna. Cum arcu a, id vitae. Pellentesque pharetra in cras sociis adipiscing est. Nibh nec mattis at maecenas, nisl orci aliquam nulla justo egestas venenatis, elementum duis vel porta eros, massa vitae, eligendi imperdiet amet. Nec neque luctus suscipit, justo sem praesent, ut nisl quisque, volutpat torquent wisi tellus aliquam reprehenderit, curabitur cras at quis massa porttitor mauris. Eros sed ultrices. Amet dignissim justo urna feugiat mauris litora, etiam accumsan, lobortis a orci suspendisse. Semper ac mauris, varius bibendum pretium, orci urna nunc ullamcorper auctor, saepe sem integer quam, at feugiat egestas duis. Urna ligula ante. Leo elementum nonummy. Sagittis mauris est in ipsum, nulla amet non justo, proin id potenti platea posuere sit ut, nunc sit erat bibendum. Nibh id auctor, ab nulla vivamus ultrices, posuere morbi nunc tellus gravida vivamus.
          Mauris nec, facilisi quam fermentum, ut mauris integer, orci tellus tempus diam ut in pellentesque. Wisi faucibus tempor et odio leo diam, eleifend quis integer curabitur sit scelerisque ac, mauris consequat luctus quam penatibus fringilla dis, vitae lacus in, est eu ac tempus. Consectetuer amet ipsum amet dui, sed blandit id sed. Tellus integer, dignissim id pede sodales quis, felis dolorem id mauris orci, orci tempus ut. Nullam hymenaeos. Curabitur in a, tortor ut praesent placerat tincidunt interdum, ac dignissim metus nonummy hendrerit wisi, etiam ut.
          Semper praesent integer fusce, tortor suspendisse, augue ligula orci ante asperiores ullamcorper. In sit per mi sed sed, mi vestibulum mus nam, morbi mauris neque vitae aliquam proin senectus. Ac amet arcu mollis ante congue elementum, inceptos eget optio quam pellentesque quis lobortis, sollicitudin sed vestibulum sollicitudin, lectus parturient nullam, leo orci ligula ultrices. At tincidunt enim, suspendisse est sit sem ac. Amet tellus molestie est purus magna augue, non etiam et in wisi id. Non commodo, metus lorem facilisi lobortis ac velit, montes neque sed risus consectetuer fringilla dolor. Quam justo et integer aliquam, cursus nulla enim orci, nam cursus adipiscing, integer torquent non, fringilla per maecenas. Libero ipsum sed tellus purus et. Duis molestie placerat erat donec ut. Dolor enim erat massa faucibus ultrices in, ante ultricies orci lacus, libero consectetuer mauris magna feugiat neque dapibus, donec pretium et. Aptent dui, aliquam et et amet nostra ligula.
          Augue curabitur duis dui volutpat, tempus sed ut pede donec. Interdum luctus, lectus nulla aenean elit, id sit magna, vulputate ultrices pellentesque vel id fermentum morbi. Tortor et. Adipiscing augue lorem cum non lacus, rutrum sodales laoreet duis tortor, modi placerat facilisis et malesuada eros ipsum, vehicula tempus. Ac vivamus amet non aliquam venenatis lectus, sociosqu adipiscing consequat nec arcu odio. Blandit orci nec nec, posuere in pretium, enim ut, consectetuer nullam urna, risus vel. Nullam odio vehicula massa sed, etiam sociis mauris, lacus ullamcorper, libero imperdiet non sodales placerat justo vehicula. Nec morbi imperdiet. Fermentum sem libero iaculis bibendum et eros, eget maecenas non nunc, ad pellentesque. Ut nec diam elementum interdum. Elementum vitae tellus lacus vitae, ipsum phasellus, corporis vehicula in ac sed massa vivamus, rutrum elit, ultricies metus volutpat.
          Semper wisi et, sollicitudin nunc vestibulum, cursus accumsan nunc pede tempus mi ipsum, ligula sed. Non condimentum ac dolor sit. Mollis eu aliquam, vel mattis mollis massa ut dolor ante, tempus lacinia arcu. Urna vestibulum lorem, nulla fermentum, iaculis ut congue ac vivamus. Nam libero orci, pulvinar nulla, enim pellentesque consectetuer leo, feugiat rhoncus rhoncus vel. Magna sociosqu donec, dictum cursus ullamcorper viverra. Ultricies quis orci lorem, suspendisse ut vestibulum integer, purus sed lorem pulvinar habitasse turpis.
          +
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Disagree
          </v-btn>
          <v-btn
            color="green darken-1"
            text
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    </div>
</template>
<script>
export default {
    data(){
        return{
            error_message:"SELECT SUBJECT OR CLICK ON SUBJECT FROM THE SIDEBAR TO ADD SUBJECT",
            // PRIMARY SCHOOL DATA
            primary_hideError:true,
            primary_allSubjects:{},
            primaryModel:false,
            primary_errorReport:null,
            add_primary_subject:{},
            p_selected_subject:'',

            // JUNIOIR SCHOOL DATA
            hideError:true,
            allSubjects:{},
            showModel:false,
            showSpinner:true,
            subjectCategory:[],
            errorReport:null,
                
            addSubject:{
                selectedSubject:'',
                science :'',
                art:'',
                commercial :'',
            },

            // others
            feedBack:'Save',
           
        }
    },
    methods: {
        // prmary school data
        get_Primary_Subject(){
            this.axios.get(this.$hostname+"primary_api.php?action=get_Primary_Subject").then((response)=>{
                this.primary_allSubjects = response.data;
            }).catch(error=>{
                alert(error);
            });
        },
        add_Primary_Subject(){
            
            this.axios.post(this.$hostname+"primary_api.php?action=add_Primary_Subject", this.add_primary_subject).then((response)=>{
                console.log(response.data);
                this.get_Primary_Subject();
                this.primaryModel=false;
            })
        },

        // junior secondary subject
        getSubject(){
            //  this.axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
            this.axios.get(this.$hostname+"junior_api.php?action=getSubject").then((response)=>{
                this.allSubjects= response.data;
            }).catch(error=>{
                alert(error);
            })

         },
           addSubjectMtd(){
            this.addSubject.science = this.subjectCategory[0];
            this.addSubject.art = this.subjectCategory[1];
            this.addSubject.commercial = this.subjectCategory[2];
           
           if(this.subjectCategory !=""){
          
            
            // check if subject exist 
            for (let index = 0; index < this.allSubjects.length; index++) {
           

                var ele = this.allSubjects[index].subject.toLowerCase();
                var newEle = this.addSubject.selectedSubject.toLowerCase();

                if (ele == newEle){
                    this.errorReport = 'Subject Already Exist';
                    break;
                }
                
            }
            if(this.errorReport == null){
                this.feedBack="Saving Data..."
                this.showSpinner= false;

                  this.axios.post(this.$hostname+"junior_api.php?action=addSubject",this.addSubject).then((response)=>{
                    response;
                    this.showSpinner= !this.showSpinner;
                        this.showModel= false;
                        // reset form
                        this.subjectCategory = "",
                        this.addSubject.selectedSubject = "",
                        this.getSubject();
                    }).catch(error=>{alert(error)});

            }

            
           }else{
               alert('please select at least one subject category');
           }

        },
    


    },
    created(){
        this.getSubject();
        this.get_Primary_Subject();
    },
     
}
</script>