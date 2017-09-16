$(document).ready(function () {
    $('#btn-register').click(function () {
        var contact = true;

        if ($('#exampleContact1').val() !== 'Email') {
            contact = false;
        }
        var data = {
            first_name: $('#exampleInputName').val(),
            last_name: $('#exampleInputLastName').val(),
            email_address: $('#exampleInputEmail1').val(),
            phone_number: $('#exampleInputPhoneNumber1').val(),
            contact_mode: $('#exampleContact1').val(),
            contact_list: $('#exampleContactList').val()
        }
        $.post('/users', data)
    });
});