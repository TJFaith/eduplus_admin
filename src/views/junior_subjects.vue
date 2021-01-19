<template>
    <div class="Container">
        <div class="pageLayout d-flex justify-content-center text-white">
<!-- snackbar for error alert -->
 <v-snackbar
      v-model="showSnackbarAlert"
      color="red"
    >
      {{ errorMessage }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="white"
          text
          v-bind="attrs"
          @click="showSnackbarAlert = false"
        >
          <v-icon>fas fa-times</v-icon>
        </v-btn>
      </template>
    </v-snackbar>

    <!-- end of snackbar -->
<v-data-table
    :headers="headers"
    :items="junior_allSubjects"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>JUNIOR SUBJECTS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>

        <!-- MEW ITEM DIALOG AND EDIT DIALOG-->
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >

          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-plus</v-icon> New Subject
            </v-btn>
          </template>
          <v-card>
            <v-form ref="form">
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="8"
                  >
                    <v-text-field
                      v-model="editedItem.subject"
                      label="Subject Name"
                      :rules="nameRules"
                      required
                    ></v-text-field>
                  
                  </v-col>
                 

              
                </v-row>
                <v-row>
                   <v-col cols="4">
                    <h6>Subject Category</h6>
                    <ul style="list-style-type:none;">
                      <li class="d-inline">
                      
                         <v-checkbox v-model="subject_category.science" @change="checkw" label="Science" color="red" value="s" hide-details ></v-checkbox>
                      </li>
                      <li class="d-inline">
                         <v-checkbox v-model="subject_category.commercial" @change="checkw" label="Commercial" color="blue" value="c" hide-details ></v-checkbox>
                      </li>
                      <li class="d-inline">
                         <v-checkbox v-model="subject_category.art" @change="checkw" label="Art" color="green" value="a" hide-details ></v-checkbox>
                      </li>
                    </ul>
                   
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-form>
          </v-card>
        </v-dialog>

        <!-- DELET DIALOG -->
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Are you sure you want to delete this {{selectedSubjct}}?, The questions and options related to this subject would be deleted as well</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
            

              <v-btn color="blue darken-1" :disabled="showLoading" text @click="deleteItemConfirm">
           <v-progress-circular color="primary" v-if="showLoading"  :size="20"  indeterminate></v-progress-circular>
                
                OK
                </v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
        
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="get_junior_Subject"
      >
        Refresh
      </v-btn>
    </template>
  </v-data-table>
  </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      nameRules: [
        v => !!v || 'Name is required',
      ],
     subject_category:{science:'', commercial:'', art:''},
      showSnackbarAlert:false,
      errorMessage:'',
      selectedSubjct:null,
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Subjects', align: 'start', sortable: true, value: 'subject'},
        { text: 'Subject Category', value: 'subject_category' },
        { text: 'Total Questions', value: 'total_question' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      junior_allSubjects: [],
      editedIndex: -1,
      editedItem: {
        subject: '',
        total_question: 0,
        
      },
      defaultItem: {
        subject: '',
        total_question: 0,
      },
      showLoading:false
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Subject' : 'Edit Subject'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {

      this.get_junior_Subject()
    },

    methods: {
       get_junior_Subject(){
            this.axios.get(this.$hostname+"junior_api.php?action=get_junior_Subject").then((response)=>{
                this.junior_allSubjects = response.data;
                  
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });
        },
      checkw(){
        if(this.subject_category.science === null){this.subject_category.science = ''}
        if(this.subject_category.commercial === null){this.subject_category.commercial= ''}
        if(this.subject_category.art === null){this.subject_category.art = ''}

      },
      editItem (item) {
        var res = item.subject_category.split("");
        

        if(res[0]=='s'){this.subject_category.science = res[0]}
        if(res[1]=='c'){this.subject_category.commercial = res[1]}
        if(res[2]=='a'){this.subject_category.art = res[2]}

        if(res[0]=='c'){this.subject_category.commercial = res[0]}
        if(res[0]=='a'){this.subject_category.art = res[0]}

        if(res[1]=='a'){this.subject_category.art = res[1]}
      
      
        this.editedIndex = this.junior_allSubjects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.selectedSubjct = item.subject
        this.editedIndex = this.junior_allSubjects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.showLoading = true
         this.axios.post(this.$hostname+"junior_api.php?action=delete_junior_Subject", this.editedItem).then((response)=>{
           response
                this.get_junior_Subject();
        this.showLoading = false
                this.closeDelete()
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });

      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.subject_category.science = ''
          this.subject_category.commercial =''
          this.subject_category.art=''
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.subject_category.science = ''
          this.subject_category.commercial =''
          this.subject_category.art=''
          this.editedIndex = -1
        })
      },

      save () {
        //  this.$refs.form.validate()
        if (this.subject_category.science != '' || this.subject_category.commercial != '' || this.subject_category.art != ''){
         
        
        if( this.$refs.form.validate()){
        this.showLoading = true
        if (this.editedIndex > -1) {

           this.editedItem.subject_category = this.subject_category.science + this.subject_category.commercial + this.subject_category.art
           
           
          this.axios.post(this.$hostname+"junior_api.php?action=update_junior_Subject", this.editedItem).then((response)=>{
           response
        this.showLoading = false
                this.get_junior_Subject();
                this.closeDelete()
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });

        } else {
         

           this.editedItem.subject_category = this.subject_category.science + this.subject_category.commercial + this.subject_category.art
          this.axios.post(this.$hostname+"junior_api.php?action=add_junior_Subject", this.editedItem).then((response)=>{
                     response
                          this.get_junior_Subject();
                  this.showLoading = false
                          this.primaryModel=false;
                      }).catch(error=>{
                        this.errorMessage = error
                          this.showSnackbarAlert = true
                      });
        }
           this.close()

        }
       

        }else{
           this.errorMessage ="You must select at least one subject category"
           this.showSnackbarAlert = true
        }
        
        
      },
    },
  }
</script>