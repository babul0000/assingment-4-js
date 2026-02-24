
let interviews = [];
let rejected = [];

let total = document.getElementById('total-card-number');
let interviewCount = document.getElementById('interview-card-number');
let rejectedCount = document.getElementById('Rejected-card-number');

// let changBtn = document.querySelector('.chang-btn');

let mainContainer = document.getElementById('body'); 
const allCardSection = document.getElementById('all-interview-card');
let filterSection = document.getElementById('filter-section');
let jobs = document.getElementById('total-jobs');
let jobsLength = allCardSection.querySelectorAll('.card').length;


if(jobs) jobs.innerText = jobsLength;
interviewCount.innerText = interviews.length;
rejectedCount.innerText = rejected.length;

function countTotal() {
    
    let currentCards = allCardSection.querySelectorAll('.card').length;
    total.innerText = currentCards + interviews.length + rejected.length;
}

countTotal();


const allFilterBtn = document.getElementById('all-btn-card');
const interviewFilterBtn = document.getElementById('Interview-btn-card');
const rejectedFilterBtn = document.getElementById('rejected-btn-card');


function showEmptyCard() {
    const emptyCard = `
    <div class="empty-card py-10 flex flex-col items-center justify-center bg-gray-400 rounded-lg">
        <h3 class="text-lg font-bold">No jobs available</h3>
        <p class="text-gray-600">Check back soon for new job opportunite</p>
    </div>`;
    filterSection.innerHTML = emptyCard;
}

let activeFilter = 'all';

// toggle section main 3 ta button er bg-color poriborton kora 
function toggleStyle(id) {
    
    [allFilterBtn, interviewFilterBtn, rejectedFilterBtn].forEach(btn => {
        btn.classList.remove('bg-primary', 'text-white');
        btn.classList.add('bg-white', 'text-[#64748B]');
    });

    let selected = document.getElementById(id);
    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-primary', 'text-white');

    if (id == 'Interview-btn-card') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        activeFilter = 'interview';
        if (interviews.length == 0) showEmptyCard();
        else renderJob('interview');
    }
    
    else if (id == 'rejected-btn-card') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        activeFilter = 'rejected';
        if (rejected.length == 0) showEmptyCard();
        else renderJob('rejected');
    }
    
    else {
        activeFilter = 'all';
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }

    updateCounts();
}

// aikhane click korle chang hobe
document.addEventListener('click', function (even) {
    const target = even.target;
    const card = target.closest('.card');

    if (!card) return;

    if (target.classList.contains('interview-btn')) {
        updateJobStatus(card, 'interview')

    }

    if (target.classList.contains('rejected-btn')) {
        updateJobStatus(card, 'rejected');
    }

    if (target.closest('.delete-btn')) {
        deleteJob(card);
    }
});
// add and remove 
function updateJobStatus(card, cardStatus) {
    
    const title = card.querySelector('.plant-name').innerText;
    const position = card.querySelector('.latin-name').innerText;
    const type = card.querySelector('.light').innerText;
    const build = card.querySelector('.word').innerText;
    // const changbtn = card.querySelector('.chang-btn').innerText;

    const job = { title, position, type, status: cardStatus, build,};

    const interviewBtn = card.querySelector('.interview-btn');
    const rejectedBtn = card.querySelector('.rejected-btn');

    
    interviews = interviews.filter((item) => item.title !== title);
    rejected = rejected.filter((item) => item.title !== title);

    if (cardStatus === 'interview') {
        interviews.push(job);

        
        
        if (activeFilter === 'all') card.remove();
        
        interviewBtn.classList.add('bg-[#10B981]', 'text-white');
        rejectedBtn.classList.remove('bg-[#EF4444]', 'text-white');
    }

    if (cardStatus === 'rejected') {
        rejected.push(job);

        
        if (activeFilter === 'all') 
            card.remove();

        rejectedBtn.classList.add('bg-[#EF4444]', 'text-white');
        interviewBtn.classList.remove('bg-[#10B981]', 'text-white');
    }

    updateCounts();
    if (activeFilter !== 'all') renderJob(activeFilter);
}

// akhane new section er jinish gula rakha hocce  interview te click korle jno dynamic vabe add hoy

function renderJob(status) {
    filterSection.innerHTML = '';
    let data = (status === 'interview') ? interviews : rejected;

    data.forEach(item => {
        let statusColor = item.status === 'interview' ? 'py-2 bg-green-100 text-green-900' : 'py-2 bg-red-100 text-red-900';
        let div = document.createElement('div');
        div.className = 'card space-y-4 shadow-xs rounded-md bg-white p-5 mb-5';
        div.innerHTML = `
            <div class="flex justify-between">
                <div class="space-y-4">
                    <h2 class="plant-name text-[#002C5C] font-semibold text-[18px] title">${item.title}</h2>
                    <p class="latin-name text-[#64748B] position">${item.position}</p>
                </div>
                <div>
                    <button class="delete-btn border-gray-200 border-2 w-10 h-10 rounded-full btn">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
            </div>
            <div class="space-y-3">
                <p class="light text-[#64748B] type">${item.type}</p>
                <p class="status-1 text-[14px] w-[100px] text-center rounded py-1 ${statusColor}">${item.status}</p>
                <p class="word build">${item.build}</p>
                <div class="flex gap-3">
                    <button class="interview-btn btn border-[#10B981] border-2 text-[#10B981] w-[120px]">interview</button>
                    <button class="rejected-btn btn border-[#EF4444] border-2 text-[#EF4444] w-[120px]">Rejected</button>
                </div>
            </div>`;
        filterSection.appendChild(div);
    });
}
// dellet korar section

function deleteJob(card) {
    const title = card.querySelector('.plant-name').innerText;

    interviews = interviews.filter((item) => item.title !== title);
    rejected = rejected.filter((item) => item.title !== title);

    card.remove();

    updateCounts();
    if(activeFilter !== 'all') {
        const currentData = (activeFilter === 'interview' ? interviews : rejected);
        if(currentData.length === 0) showEmptyCard();
    }

}

function updateCounts() {
    let currentMainCards = allCardSection.querySelectorAll('.card').length;
    // jobsLength = currentMainCards + interviews.length + rejected.length;

    // total.innerText = jobsLength;
    total.innerText = currentMainCards + interviews.length + rejected.length;
    interviewCount.innerText = interviews.length;
    rejectedCount.innerText = rejected.length;
    
    if (jobs) {
        if (activeFilter === 'all') jobs.innerText = currentMainCards;
        else jobs.innerText = (activeFilter === 'interview' ? interviews.length : rejected.length);
    }
}