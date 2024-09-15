 const form = document.getElementById('resume-form') as HTMLFormElement;
 const resumeDisplayElement= document.getElementById('resume-display') as HTMLDivElement;
 const shareablelinkcontainer=document.getElementById('shareable-link-container')as HTMLDivElement;
const shareablelinkElement=document.getElementById('shareable-link')  as HTMLAnchorElement;
const downloadPdfButton= document.getElementById('download-pdf') as HTMLButtonElement;

 form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();

    const username= (document.getElementById('username') as HTMLInputElement).value;
    const name=(document.getElementById('name') as HTMLInputElement).value;
    const email=(document.getElementById('email') as HTMLInputElement).value;
    const contactNumber=(document.getElementById('contactNumber') as HTMLInputElement).value;
    const education=(document.getElementById('education') as HTMLTextAreaElement).value;
    const experience=(document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills=(document.getElementById('skills') as HTMLTextAreaElement).value;


    const resumeData={
        name,
        email,
        contactNumber,
        education,
        experience,
        skills

    };
    localStorage.setItem(username,JSON.stringify(resumeData));




    const resumeHTML=`
    <h2>  Editable Resume</h2>
    <h3> Personal Information</h3>
    <p> Name: <span contenteditable="true">${name}</span></p>
    <p> Name: <span contenteditable="true">${email}</span></p>
    <p> Name:<span contenteditable="true">${contactNumber}</span></p>
    
    <h3> Education </h3>
    <p contenteditable="true"> Name:${education}</p>

    <h3> Experience</h3>
    <p contenteditable="true"> Name:${experience}</p>

    <h3> Skills</h3>
    <p contenteditable="true"> Name:${skills}</p>`;
 
    resumeDisplayElement.innerHTML=resumeHTML;
    const shareableURL= `${window.location.origin}?username=${encodeURIComponent(username)}`

    shareablelinkcontainer.style.display='block';
    shareablelinkElement.href=shareableURL;
    shareablelinkElement.textContent=shareableURL;



 });

 downloadPdfButton.addEventListener('click',()=>{
    window.print();
 })

 window.addEventListener('DOMContentLoaded',()=>{
    const urlParams= new URLSearchParams(window.location.search);
    const username= urlParams.get('username');
    if(username){
        const savedResumeData=localStorage.getItem(username);
        if(savedResumeData){
            const resumeData=JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value=username;
            (document.getElementById('name') as HTMLInputElement).value=resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value=resumeData.email;
            (document.getElementById('contactNumber') as HTMLInputElement).value=resumeData.contactNumber;
            (document.getElementById('education') as HTMLTextAreaElement).value=resumeData.education;
            (document.getElementById('experience') as HTMLTextAreaElement).value=resumeData.experience;
            (document.getElementById('skills') as HTMLTextAreaElement).value=resumeData.skills;
        }
    }
 })
