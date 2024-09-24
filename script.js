document.getElementById('blogButton').addEventListener('click', function() {
    window.location.href = 'blog.html';
});


document.getElementById('donate_to_noakhali').addEventListener('click', function(event) {
    event.preventDefault();
    
    const noakhaliDonation = getInputFieldValueById('noakhali_donation_amount');
    const mainBalance = getTextFieldValueById('main_balance');
    
    
    if (isNaN(noakhaliDonation) || noakhaliDonation <= 0 || noakhaliDonation > mainBalance) {
        const failedModal = document.getElementById('failed_modal');
        failedModal.showModal();
        return;
    }

    const noakhaliDonationTotal = getTextFieldValueById('noakhali_donation_total');
    const newNoakhaliDonationTotal = noakhaliDonationTotal + noakhaliDonation;
    const newMainBalance = mainBalance - noakhaliDonation;
    const modal = document.getElementById('succes_modal');

    document.getElementById('noakhali_donation_total').innerText = newNoakhaliDonationTotal;
    document.getElementById('main_balance').innerText = newMainBalance;
    modal.showModal();
    const noakhaliTitle = document.getElementById('noakhali_title').innerText;
    
    const time = Date();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'gap-2', 'flex', 'flex-col', 'mt-4');

    div.innerHTML = `<p>${noakhaliDonation} Taka is Donated for ${noakhaliTitle}</p>
    <p>${time}</p>`

    document.getElementById('transactions_section').appendChild(div);
    
});


document.getElementById('quota_donation_btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const quotaDonation = getInputFieldValueById('quota_donation_amount');
    const mainBalance = getTextFieldValueById('main_balance');
    
    
    if (isNaN(quotaDonation) || quotaDonation <= 0 || quotaDonation > mainBalance) {
        const failedModal = document.getElementById('failed_modal');
        failedModal.showModal();
        return;
    }

    const quotaDonationTotal = getTextFieldValueById('quota_donation_total');
    const newQuotaDonationTotal = quotaDonationTotal + quotaDonation;
    
    const newMainBalance = mainBalance - quotaDonation;
    const modal = document.getElementById('succes_modal');

    document.getElementById('quota_donation_total').innerText = newQuotaDonationTotal;
    document.getElementById('main_balance').innerText = newMainBalance;
    modal.showModal();
    

    const quotaTitle = document.getElementById('quota_title').innerText;
    
    const time = Date();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'gap-2', 'flex', 'flex-col', 'mt-4');

    div.innerHTML = `<p>${quotaDonation} Taka is Donated for ${quotaTitle}</p>
    <p>${time}</p>`

    document.getElementById('transactions_section').appendChild(div);
});



document.getElementById('feni_donation-btn').addEventListener('click', function(event) {
    event.preventDefault();
    
    const feniDonation = getInputFieldValueById('feni_donation_amount');
    const mainBalance = getTextFieldValueById('main_balance');
    
    
    if (isNaN(feniDonation) || feniDonation <= 0 || feniDonation > mainBalance) {
        const failedModal = document.getElementById('failed_modal');
        failedModal.showModal();
        return;
    }

    const feniDonationTotal = getTextFieldValueById('feni_donation_total');
    const newFeniDonationTotal = feniDonationTotal + feniDonation;
    
    const newMainBalance = mainBalance - feniDonation;
    const modal = document.getElementById('succes_modal');

    document.getElementById('feni_donation_total').innerText = newFeniDonationTotal;
    document.getElementById('main_balance').innerText = newMainBalance;
    modal.showModal();
    


    const feniTitle = document.getElementById('feni_title').innerText;
    
    const time = Date();

    const div = document.createElement('div');
    div.classList.add('border', 'rounded-lg', 'p-5', 'gap-2', 'flex', 'flex-col', 'mt-4');

    div.innerHTML = `<p>${feniDonation} Taka is Donated for ${feniTitle}</p>
    <p>${time}</p>`

    document.getElementById('transactions_section').appendChild(div);
});


document.getElementById('donation_btn').addEventListener('click', function() {
    showSectionById('donation_section');
    document.getElementById('donation_btn').classList.add('btn-info');
    document.getElementById('donation_btn').classList.remove('btn-outline');
    document.getElementById('history_btn').classList.add('btn-outline')
    document.getElementById('history_btn').classList.remove('btn-info')
    
});

document.getElementById('history_btn').addEventListener('click', function(){
    showSectionById('transactions_section');
    document.getElementById('history_btn').classList.add('btn-info');
    document.getElementById('history_btn').classList.remove('btn-outline');
    document.getElementById('donation_btn').classList.add('btn-outline')
    document.getElementById('donation_btn').classList.remove('btn-info')
    
})


