$(document).ready(function() {
    // Array to store entries
    var entries = [];

    // Function to add an entry to the table
    function addEntry(name, category) {
        var row = '<tr><td>' + name + '</td><td>' + category + '</td><td><button class="btn btn-danger btn-delete">Delete</button></td></tr>';
        $('#entriesTable tbody').append(row);
    }

    // Function to refresh the table with filtered and sorted entries
    function refreshTable(filterCategory) {
        $('#entriesTable tbody').empty();
        // Sort entries by category
        entries.sort(function(a, b) {
            return a.category.localeCompare(b.category);
        });

        $.each(entries, function(index, entry) {
            if (filterCategory === 'all' || entry.category === filterCategory) {
                addEntry(entry.name, entry.category);
            }
        });
    }

    // Add entry when the form is submitted
    $('#addForm').submit(function(event) {
        event.preventDefault();
        var name = $('#entryName').val();
        var category = $('#category').val();
        entries.push({ name: name, category: category });
        addEntry(name, category);
        $('#entryName').val('');
    });

    // Delete entry when the delete button is clicked
    $('#entriesTable').on('click', '.btn-delete', function() {
        var row = $(this).closest('tr');
        var index = row.index();
        entries.splice(index, 1);
        row.remove();
    });

    // Sort and filter entries when the sort category is changed
    $('#sortCategory').change(function() {
        var filterCategory = $(this).val();
        refreshTable(filterCategory);
    });

    // Initialize the table with all entries
    refreshTable('all');
});
