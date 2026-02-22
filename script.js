
// faka array
let interviewList = [];
let RejectedList = [];
let currentStatus = 'all';

// uporer 3 ta card
let totalCardNumber = document.getElementById('total-card-number');
let interviewCardNumber = document.getElementById('interview-card-number');
let RejectedCardNumber = document.getElementById('Rejected-card-number');

// all head btn
const allFilterCard = document.getElementById('all-btn-card');
const InterviewFilterCard = document.getElementById('Interview-btn-card');
const RejectedFilterCard = document.getElementById('rejected-btn-card');

// main
const mainContainer = document.getElementById('main')
console.log(mainContainer);

// all-interview-card
const allInterviewCard = document.getElementById('all-interview-card');

// interview card
const filterSection = document.getElementById('filter-section')

// total card function 
function calculateCount(){
    totalCardNumber.innerText = allInterviewCard.children.length;
    interviewCardNumber.innerText = interviewList.length;
    RejectedCardNumber.innerText = RejectedList.length;
}
calculateCount();

// togglestyle
function toggleStyle(id){
    allFilterCard.classList.remove('bg-primary', 'text-white');
    InterviewFilterCard.classList.remove('bg-primary', 'text-white');
    RejectedFilterCard.classList.remove('bg-primary', 'text-white');


    allFilterCard.classList.add('bg-white', 'text-[#64748B]');
    InterviewFilterCard.classList.add('bg-white', 'text-[#64748B]');
    RejectedFilterCard.classList.add('bg-white', 'text-[#64748B]');

    

    const selected = document.getElementById(id);

    currentStatus = id

    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-primary', 'text-white');

    if(id == 'Interview-btn-card'){
        allInterviewCard.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderInterview()
    }
    else if(id == 'all-btn-card'){
        allInterviewCard.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id == 'rejected-btn-card'){
        allInterviewCard.classList.add('hidden')
        filterSection.classList.remove('hidden')
        renderRejected()
    }
    // else if(id == 'all-btn-card'){
    //     allInterviewCard.classList.remove('hidden');
    //     filterSection.classList.add('hidden');
    // }
}


allInterviewCard.addEventListener('click', function(event) {
    // console.log(event.target.classList.contains('interview-btn'));

    if(event.target.classList.contains('interview-btn')) {
    const parentNode = event.target.closest('.space-y-4');
    const cardInfo = {
        plantName: parentNode.querySelector('.plant-name').innerText,
        latinName: parentNode.querySelector('.latin-name').innerText,
        light: parentNode.querySelector('.light').innerText,
        word: parentNode.querySelector('.word').innerText
    }
    

    
    // notes: = parentNode.querySelector('.notes').innerText
    // changBtn:  = parentNode.querySelector('.chang-btn').innerText
    // parentNode.querySelector('.chang-btn').innerText = `interview`
    
    // const cardInfo = [
    //     plantName,
    //     latinName,
    //     light,
    //     word,
    //     notes,
    //     changBtn 
    // ]
    const planExit = interviewList.find(item=> item.plantName == cardInfo.plantName)

    

    if(!planExit){
        interviewList.push(cardInfo)
        this.parentNode.querySelector('.all-btn-card').innerText = 'interview';
    }

    RejectedList = RejectedList.filter(item=> item.plantName != cardInfo.plantName)

    if(currentStatus === 'rejected-btn-card'){
        renderRejected()
    }

    calculateCount();
    }

    else if(event.target.classList.contains('rejected-btn')) {
    const parentNode = event.target.closest('.space-y-4');
    const cardInfo = {
        plantName: parentNode.querySelector('.plant-name').innerText,
        latinName: parentNode.querySelector('.latin-name').innerText,
        light: parentNode.querySelector('.light').innerText,
        word: parentNode.querySelector('.word').innerText
    }
    

    
    // notes: = parentNode.querySelector('.notes').innerText
    // changBtn:  = parentNode.querySelector('.chang-btn').innerText
    parentNode.querySelector('.chang-btn').innerText = `Rejected`
    
    // const cardInfo = [
    //     plantName,
    //     latinName,
    //     light,
    //     word,
    //     notes,
    //     changBtn 
    // ]
    const planExit = RejectedList.find(item=> item.plantName == cardInfo.plantName)

    

    if(!planExit){
        RejectedList.push(cardInfo);
        // this.parentNode.querySelector('.all-btn-card').innerText = 'rejected';
    }

    interviewList = interviewList.filter(item=> item.plantName != cardInfo.plantName)

    if(currentStatus == 'Interview-btn-card'){
        renderInterview()
    }
    
    // renderRejected()
    calculateCount();
    }
});

function renderInterview (){
    filterSection.innerHTML = ``;

    for(let interview of interviewList){
        
        let div = document.createElement('div')
        div.className = `space-y-4 shadow-xs rounded-md bg-white p-5`
        div.innerHTML = `
        <div class="flex justify-between">
                <div class="space-y-4">
                    <h2 class="plant-name text-[#002C5C] font-semibold text-[18px]">${interview.plantName}</h2>
                    <p class=" latin-name text-[#64748B]">${interview.latinName}</p>
                </div>
                <div>
                    <button class="border-gray-200 border-2 w-10 h-10 rounded-full btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <div class="space-y-3">
                <p class="light text-[#64748B]">${interview.light}</p>
                <button class="all-btn-card btn w-[120px] text-[#002C5C] bg-[#EEF4FF] border-none">Not Applied</button>
                <p class="word">${interview.word}</p>
                <div class="notes space-x-3">
                    <button  class="interview-btn  btn w-[120px] border-[#10B981] border-2 text-[#10B981]">interview</button>
                    <button class="rejected-btn  btn w-[120px] border-[#EF4444] border-2 text-[#EF4444]">Rejected</button>
                </div>
            </div>
        `
        filterSection.appendChild(div)
    }
};

function renderRejected (){
    filterSection.innerHTML = ``;

    for(let Rejected of RejectedList){
        
        let div = document.createElement('div')
        div.className = `space-y-4 shadow-xs rounded-md bg-white p-5`
        div.innerHTML = `
        <div class="flex justify-between">
                <div class="space-y-4">
                    <h2 class="plant-name text-[#002C5C] font-semibold text-[18px]">${Rejected.plantName}</h2>
                    <p class=" latin-name text-[#64748B]">${Rejected.latinName}</p>
                </div>
                <div>
                    <button class="border-gray-200 border-2 w-10 h-10 rounded-full btn"><i class="fa-regular fa-trash-can"></i></button>
                </div>
            </div>
            <div class="space-y-3">
                <p class="light text-[#64748B]">${Rejected.light}</p>
                <button class="all-btn-card btn w-[120px] text-[#002C5C] bg-[#EEF4FF] border-none">Not Applied</button>
                <p class="word">${Rejected.word}</p>
                <div class="notes space-x-3">
                    <button  class="interview-btn  btn w-[120px] border-[#10B981] border-2 text-[#10B981]">interview</button>
                    <button class="rejected-btn  btn w-[120px] border-[#EF4444] border-2 text-[#EF4444]">Rejected</button>
                </div>
            </div>
        `
        filterSection.appendChild(div)
    }
};