let important=true;

function toggleImportant(){
    console.log("clicked");
    if(important===true){
        $("#iImportant").removeClass("fas").addClass("far");
        important=false;
    }else{
        $("#iImportant").removeClass("far").addClass("fas");
        important=true;
    }
}
let form=false;
function toggleForm(){
    if(form){
        $("form").slideUp(500);
        $("#btnAdd").text("Add Task");
        form=false;
    }else{
        $("form").slideDown(500);
        $("#btnAdd").text("Hide the Form");
        form=true;
    }         
}
function save(){
    console.log("Saving Task");
    let title=$("#txtTitle").val();
    let date=$("#selDate").val();
    let location=$("#txtLocation").val();
    let priority=$("#selPriority").val();
    let color=$("#selColor").val();
    let collaborator=$("#txtCollaborator").val();
    let description=$("#txtDescription").val();
    console.log(title,date,location,priority,color,collaborator,description);
    displayTask(title);
    clearForm();
    //get information from the inputs

}
function displayTask(title){
    syntax=`
    <div>
        <h6>${title}</h6>
    </div>
    `;
    $(".pending-tasks").append(syntax);
}
function clearForm(){
    $("#txtTitle").val("");
    $("#selDate").val("");
    $("#txtLocation").val("");
    $("#selPriority").val("");
    $("#selColor").val("");
    $("#txtCollaborator").val("");
    $("#txtDescription").val("");
}
$("#txtTitle" ).keypress(function() {
    $("#btnSave").keypress(save());
  });


function init(){
    console.log("Calendar System");
    $("form").hide();
    //hook event
    $("#iImportant").click(toggleImportant);
    $("#btnAdd").click(toggleForm);
    $("#btnSave").click(save);
}

window.onload=init;