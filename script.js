$(document).ready(function() {
    // Show login modal
    $('#login-btn').click(function() {
        $('#login-modal').show();
    });

    // Close login modal
    $('.close-btn').click(function() {
        $('#login-modal').hide();
    });

    // Handle login
    $('#login-form').submit(function(e) {
        e.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        if (username === 'admin' && password === 'adminpass') {
            alert('Admin logged in');
            $('#login-modal').hide();
            // Load admin functionalities
        } else if (username === 'get fit' && password === '123') {
            alert('Member logged in');
            $('#login-modal').hide();
            // Load member functionalities
        } else {
            alert('Invalid credentials');
        }
    });

    // Handle section navigation
    $('#home-btn').click(function() {
        $('#leaderboard, #calendar, #charts').hide();
    });

    $('#leaderboard-btn').click(function() {
        $('#leaderboard').show();
        $('#calendar, #charts').hide();
        loadLeaderboard(); // Load leaderboard data
    });

    $('#calendar-btn').click(function() {
        $('#calendar').show();
        $('#leaderboard, #charts').hide();
        loadCalendar(); // Load calendar view
    });

    $('#charts-btn').click(function() {
        $('#charts').show();
        $('#leaderboard, #calendar').hide();
        loadCharts(); // Load charts
    });

    // Example data
    const exampleData = {
        labels: ['Plant Points', 'Protein Points', 'Probiotic Points', 'Walking', 'Exercise', 'Sleep', 'Hydration', 'Me Time and Meditation', 'Volunteer Points'],
        data: [10, 15, 5, 20, 25, 10, 15, 10, 30]
    };

    // Load charts
    function loadCharts() {
        new Chart(document.getElementById('pie-chart').getContext('2d'), {
            type: 'pie',
            data: {
                labels: exampleData.labels,
                datasets: [{
                    data: exampleData.data,
                    backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe', '#ffce56', '#ff5733', '#33ff57', '#57aaff', '#ff5733', '#c3e2a1']
                }]
            }
        });

        new Chart(document.getElementById('bar-chart').getContext('2d'), {
            type: 'bar',
            data: {
                labels: exampleData.labels,
                datasets: [{
                    data: exampleData.data,
                    backgroundColor: '#4CAF50'
                }]
            }
        });

        new Chart(document.getElementById('line-chart').getContext('2d'), {
            type: 'line',
            data: {
                labels: exampleData.labels,
                datasets: [{
                    data: exampleData.data,
                    borderColor: '#4CAF50',
                    fill: false
                }]
            }
        });

        new Chart(document.getElementById('gauge-chart').getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Goal Achieved', 'Goal Remaining'],
                datasets: [{
                    data: [70, 30],
                    backgroundColor: ['#4CAF50', '#d9534f']
                }]
            }
        });
    }

    // Example function to load leaderboard data
    function loadLeaderboard() {
        // Example leaderboard data
        const leaderboardData = `
            <tr><th>Rank</th><th>Member</th><th>Points</th></tr>
            <tr><td>1</td><td>Aafiya</td><td>150</td></tr>
            <tr><td>2</td><td>Abdul Haq</td><td>140</td></tr>
            <tr><td>3</td><td>Afreen</td><td>130</td></tr>
        `;
        $('#leaderboard-table').html(leaderboardData);
    }

    // Example function to load calendar view
    function loadCalendar() {
        // Example calendar data
        const calendarData = `<p>Calendar view with daily performance will be displayed here.</p>`;
        $('#calendar-view').html(calendarData);
    }
});
