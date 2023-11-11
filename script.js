$(document).ready(function() {
    $('#addItemForm').submit(function(e) {
        e.preventDefault();
        var name = $('#itemName').val();
        var category = $('#itemCategory').val();
        $('#itemsTable tbody').append('<tr><td>' + name + '</td><td>' + category + '</td><td><button class="btn btn-danger deleteBtn">Delete</button></td></tr>');
        $('#itemName').val('');
        $('#itemCategory').val('');
    });

    $(document).on('click', '.deleteBtn', function() {
        $(this).closest('tr').remove();
    });
});

function sortTable(n) {
    // Sorting functionality to be implemented here
}
