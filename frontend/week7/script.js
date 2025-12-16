let contactList=[{}];

const renderContactList=()=>{
    const contactListElement= document.getElementById("contact-list");
    let cardList="";

    for (contact of contactList){
        let card=`
                    <div
                class="card bg-green-950  rounded-[40px] w-[250px] h-[450px] border-[8px] border-green-950 overflow-hidden flex flex-col gap-4 relative justify-end">
                <div class="card-image bg-slate-200 absolute h-full">
                    <img src="${contact.picture.medium}"
                        class="h-full w-full object-cover ab" alt="" srcset="">
                </div>

                <div
                    class="card-details flex flex-col gap-2 text-gray-300 p-2 z-2 bg-gradient-to-b from-transparent  to-black min-h-[100px] transition-all delay-150 duration-300 ease-in-out">
                    <div class="card-title text-2xl text-white">
                        ${contact.name.title} ${contact.name.first} ${contact.name.last}
                    </div>
                    <div class="card-desc font-light">
                        ${contact.location.city} ${contact.location.postcode}
                    </div>
                    <div
                        class="card-footer font-light flex flex-col justify-start items-center pb-4 h-[20px] overflow-hidden hover:h-[100px] cursor-pointer transition-all duration-300 ease-in-out ">
                        <div class="card-follow-btn w-full  flex justify-center animate-bounce">
                            <i class="fa-solid fa-arrow-down-long"></i>
                        </div>
                        <div class="card-icons flex flex-col gap-2 text-xs text-gray-300 w-full">
                            <div class="card-icon">
                                <i class="fa-solid fa-mobile-screen"></i>
                                ${contact.cell}

                            </div>
                            <div class="card-icon">
                                <i class="fa-solid fa-at"></i>
                                ${contact.email}

                            </div>

                            <div class="card-icon">
                                <i class="fa-regular fa-calendar-check"></i>
                                ${contact.dob.date.split("T")[0]}

                            </div>


                        </div>

                    </div>
                </div>
            </div>`
    cardList+=card;
    }
    
    contactListElement.innerHTML=cardList;
};
const fetchContact= async(contactNumber)=>{
    const apiUrl=`https://randomuser.me/api?results=${contactNumber}`;
    const response=await fetch(apiUrl);
    const data = await response.json();
    contactList=data.results;
    renderContactList();
}
fetchContact(9);

