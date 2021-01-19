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
    :items="primary_allSubjects"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>PRIMARY SUBJECTS</v-toolbar-title>
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
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.primary_subject"
                      label="Subject Name"
                      required
                      :rules="nameRules"
                    ></v-text-field>
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
            <v-card-title class="headline">Are you sure you want to delete {{selectedSubjct}}?, The questions and options related to this subject would be deleted as well</v-card-title>
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
        @click="get_Primary_Subject"
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
      showSnackbarAlert:false,
      errorMessage:'',
      selectedSubjct:null,
      dialog: false,
      dialogDelete: false,
      headers: [
        { text: 'Subjects', align: 'start', sortable: true, value: 'primary_subject'},
        { text: 'Total Questions', value: 'total_question' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      primary_allSubjects: [],
      editedIndex: -1,
      editedItem: {
        primary_subject: '',
        total_question: 0,
        
      },
      defaultItem: {
        primary_subject: '',
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

      this.get_Primary_Subject()
    },

    methods: {
       get_Primary_Subject(){
            this.axios.get(this.$hostname+"primary_api.php?action=get_Primary_Subject").then((response)=>{
                this.primary_allSubjects = response.data;
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });
        },

      editItem (item) {
        this.editedIndex = this.primary_allSubjects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.selectedSubjct = item.primary_subject
        this.editedIndex = this.primary_allSubjects.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.showLoading = true
         this.axios.post(this.$hostname+"primary_api.php?action=delete_Primary_Subject", this.editedItem).then((response)=>{
           response
                this.get_Primary_Subject();
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
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if( this.$refs.form.validate()){
        this.showLoading = true
        if (this.editedIndex > -1) {
          this.axios.post(this.$hostname+"primary_api.php?action=update_Primary_Subject", this.editedItem).then(()=>{
        this.showLoading = false
                this.get_Primary_Subject();
                this.closeDelete()
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });

        } else {
      
          this.axios.post(this.$hostname+"primary_api.php?action=add_Primary_Subject", this.editedItem).then((response)=>{
            response
                this.get_Primary_Subject();
        this.showLoading = false

                this.primaryModel=false;
            }).catch(error=>{
              this.errorMessage = error
                this.showSnackbarAlert = true
            });
        }
        this.close()
        }
      },
    },
  }
</script>