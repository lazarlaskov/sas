    
window.onload = function(){


  Vue.use(VeeValidate); 

  var app = new Vue({
    el: '#app',
    data:{
        validator: null,
        c1:true,
        c2:false,
        c3:false,
        c4:false,
        p_Name:undefined,
        d_Name:undefined,
        wb_opt:'',
        tr_opt:'',
        pa_opt:'',
        checked:'Right-Leg',
        day_opt:'Morning',
        movment:'Yes',
        doc_err:false,
        interface_user:'Patient',
        pain_num:false,
        tired_num:false,
        wellbeing_num:false,
        slide1:false,
        slide2:false,
        slide3:false,
        slide4:false
    },
    methods:{
        wellbeing_num_fu: function()
        {
                if(this.wb_opt == undefined || this.wb_opt == null || this.wb_opt == "")
                {
                    this.wellbeing_num = true;
                    return;
                }else{
                    this.wellbeing_num = false;
                }
        },
        pain_num_fu:function()
        {
               if(this.pa_opt == undefined || this.pa_opt == null || this.pa_opt == "")
                {
                    this.pain_num = true;
                    return;
                }else{
                    this.pain_num = false;
                }
        },
        tired_num_fu:function()
        {
               if(this.tr_opt == undefined || this.tr_opt == null || this.tr_opt == "")
                {
                    this.tired_num = true;
                    return;
                }else{
                    this.tired_num = false;
                }
        },
        moving:function(t1,t2,t3,t4){

            if(t1)
            {
                console.log("slide 1 set");
            }
            else if(t2)
            {
              

                if($("#datepicker").val() == "" || $("#datepicker").val() == null)
                {
                    $("#dataB").text("not set");
                }
                else
                {
                    $("#dataB").text($("#datepicker").val()); 
                }

                if(this.p_Name==undefined || this.p_Name=="")
                {
                    this.p_Name="";
                     if(this.d_Name==undefined || this.d_Name=="")
                     {
                        this.d_Name="";
                        return;
                     }
                    return;
                }
                if(this.d_Name==undefined || this.d_Name=="")
                {
                    this.d_Name="";
                    return;
                }
                if((this.p_Name==undefined || this.p_Name=="") && (this.d_Name==undefined || this.d_Name==""))
                {
                    return;
                }
                // t1 finnish
                this.slide1 = true;
            }
            else if(t3)
            {
                
                if(this.pa_opt == undefined || this.pa_opt == null || this.pa_opt == "")
                {
                    this.pain_num = true;
                }else{
                    this.pain_num = false;
                }
               
                if(this.tr_opt == undefined || this.tr_opt == null || this.tr_opt == "")
                {
                   
                    this.tired_num = true;
                }else{
                    this.tired_num = false;
                }

                if(this.wb_opt == undefined || this.wb_opt == null || this.wb_opt == "")
                {
                    this.wellbeing_num = true;
                 
                }else{
                    this.wellbeing_num = false;
                }

                if(this.tired_num || this.pain_num ||  this.wellbeing_num)
                {
                    return;
                }

                 // t2 finnish
                this.slide2 = true;
            }
            else // t4
            {
                // t3 finnish
                this.slide3 = true;
            }

            this.c1 = t1;
            this.c2 = t2;
            this.c3 = t3;
            this.c4 = t4;
        },
        submit:function(){

            location.reload(true);

        },
      

    },

  });

   $(".datepicker").datepicker();
}
