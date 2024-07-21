document.addEventListener("DOMContentLoaded", function () {
    const salesCtx = document.getElementById('salesChart').getContext('2d');
    const monthlySalesCtx = document.getElementById('monthlySalesChart').getContext('2d');
    const revenueCtx = document.getElementById('revenueChart').getContext('2d');
    const quarterlyRevenueCtx = document.getElementById('quarterlyRevenueChart').getContext('2d');
    
    

    new Chart(salesCtx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [12000, 19000, 3000, 5000, 20000, 30000],
                backgroundColor: '#3498db',
                borderColor: '#2980b9',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ecf0f1'
                    }
                },
                x: {
                    ticks: {
                        color: '#ecf0f1'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ecf0f1'
                    }
                }
            }
        }
    });

    new Chart(monthlySalesCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Monthly Sales',
                data: [10000, 15000, 20000, 25000, 30000, 35000],
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: '#3498db',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ecf0f1'
                    }
                },
                x: {
                    ticks: {
                        color: '#ecf0f1'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ecf0f1'
                    }
                }
            }
        }
    });

    new Chart(revenueCtx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Revenue',
                data: [10000, 15000, 20000, 25000, 30000, 40000],
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: '#2ecc71',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ecf0f1'
                    }
                },
                x: {
                    ticks: {
                        color: '#ecf0f1'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ecf0f1'
                    }
                }
            }
        }
    });

    new Chart(quarterlyRevenueCtx, {
        type: 'bar',
        data: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [{
                label: 'Quarterly Revenue',
                data: [30000, 50000, 70000, 90000],
                backgroundColor: '#2ecc71',
                borderColor: '#27ae60',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#ecf0f1'
                    }
                },
                x: {
                    ticks: {
                        color: '#ecf0f1'
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#ecf0f1'
                    }
                }
            }
        }
    });






    const driver = window.driver.js.driver;
 


    // Initialize driver.js
    const driverObj = driver({
        showProgress: true,
        steps: [
            { element: '.user-details', popover: { title: 'User Details ', description: 'This is the user details.' } },
            { element: '.top-nav', popover: { title: 'Navigation Menu', description: 'This is the navigation menu.' } },
            { element: '.user-list', popover: { title: 'User List', description: 'This is the user list section.' } },
            { element: '.chart-container', popover: { title: 'Charts', description: 'These charts represent different metrics.' } }
        ]
    });

    driverObj.drive();


});
