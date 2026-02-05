// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// ===== Real-time Metrics Simulation =====
function updateMetrics() {
    const actionsPerSecond = Math.floor(Math.random() * 300) + 200;
    const volumeUSDC = Math.floor(Math.random() * 40000) + 15000;
    const activeSessions = Math.floor(Math.random() * 100) + 50;
    const avgLatency = Math.floor(Math.random() * 15) + 45;
    
    document.getElementById('actionsPerSecond').textContent = actionsPerSecond.toLocaleString();
    document.getElementById('volumeUSDC').textContent = '$' + volumeUSDC.toLocaleString();
    document.getElementById('activeSessions').textContent = activeSessions.toLocaleString();
    document.getElementById('avgLatency').textContent = avgLatency + 'ms';
}

// Update metrics every 3 seconds
updateMetrics();
setInterval(updateMetrics, 3000);

// ===== Chart.js Configuration =====
const chartColors = {
    yellow: '#FFB020',
    purple: '#7A47F3',
    blue: '#4BC0FF',
    green: '#27F5B7',
    red: '#FF5A85'
};

// Latency Comparison Chart
const latencyCtx = document.getElementById('latencyChart');
if (latencyCtx) {
    new Chart(latencyCtx, {
        type: 'bar',
        data: {
            labels: ['Ethereum L1', 'Layer 2', 'YellowMeter OS'],
            datasets: [{
                label: 'Latencia (ms)',
                data: [15000, 2000, 50],
                backgroundColor: [chartColors.red, chartColors.blue, chartColors.green],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    type: 'logarithmic',
                    ticks: {
                        callback: function(value) {
                            return value.toLocaleString() + 'ms';
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y.toLocaleString() + 'ms';
                        }
                    }
                }
            }
        }
    });
}

// Costs Comparison Chart
const costsCtx = document.getElementById('costsChart');
if (costsCtx) {
    new Chart(costsCtx, {
        type: 'bar',
        data: {
            labels: ['Ethereum L1', 'Layer 2', 'YellowMeter OS'],
            datasets: [{
                label: 'Costo por 1000 acciones (USD)',
                data: [50, 5, 0.05],
                backgroundColor: [chartColors.red, chartColors.blue, chartColors.green],
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    type: 'logarithmic',
                    ticks: {
                        callback: function(value) {
                            return '$' + value.toLocaleString();
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return '$' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            }
        }
    });
}

// ARR Growth Chart
const arrCtx = document.getElementById('arrChart');
if (arrCtx) {
    new Chart(arrCtx, {
        type: 'line',
        data: {
            labels: ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027', 'Q4 2027'],
            datasets: [
                {
                    label: 'ARR Pro',
                    data: [36, 72, 108, 144, 180, 216, 252, 288],
                    borderColor: chartColors.yellow,
                    backgroundColor: chartColors.yellow + '20',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'ARR Enterprise',
                    data: [0, 0, 50, 100, 400, 700, 1000, 1200],
                    borderColor: chartColors.purple,
                    backgroundColor: chartColors.purple + '20',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + value + 'K';
                        }
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.dataset.label + ': $' + context.parsed.y + 'K';
                        }
                    }
                }
            }
        }
    });
}

// Clients Growth Chart
const clientsCtx = document.getElementById('clientsChart');
if (clientsCtx) {
    new Chart(clientsCtx, {
        type: 'line',
        data: {
            labels: ['Q1 2026', 'Q2 2026', 'Q3 2026', 'Q4 2026', 'Q1 2027', 'Q2 2027', 'Q3 2027', 'Q4 2027'],
            datasets: [
                {
                    label: 'Clientes Pro',
                    data: [6, 12, 18, 24, 30, 36, 42, 48],
                    borderColor: chartColors.blue,
                    backgroundColor: chartColors.blue + '20',
                    fill: true,
                    tension: 0.4
                },
                {
                    label: 'Clientes Enterprise',
                    data: [0, 0, 1, 1, 2, 3, 3, 4],
                    borderColor: chartColors.green,
                    backgroundColor: chartColors.green + '20',
                    fill: true,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10
                    }
                }
            }
        }
    });
}

// ===== Cost Calculator =====
function calculateCosts() {
    const actionCount = parseInt(document.getElementById('actionCount').value) || 0;
    const actionValue = parseFloat(document.getElementById('actionValue').value) || 0;
    
    // Ethereum L1: ~$0.05 per transaction
    const costL1 = actionCount * 0.05;
    
    // Layer 2: ~90% reduction
    const costL2 = costL1 * 0.1;
    
    // YellowMeter OS: ~99% reduction
    // Using average of $0.00005 per action
    const costYellowMeter = actionCount * 0.00005;
    
    // Update UI
    document.getElementById('costL1').textContent = '$' + costL1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('costL2').textContent = '$' + costL2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    document.getElementById('costYellowMeter').textContent = '$' + costYellowMeter.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
    
    // Calculate savings
    const savingsL1 = costL1 - costYellowMeter;
    const savingsL1Percent = ((savingsL1 / costL1) * 100).toFixed(1);
    const savingsL2 = costL2 - costYellowMeter;
    const savingsL2Percent = ((savingsL2 / costL2) * 100).toFixed(1);
    
    document.getElementById('savingsL1').textContent = `$${savingsL1.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} (${savingsL1Percent}%)`;
    document.getElementById('savingsL2').textContent = `$${savingsL2.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})} (${savingsL2Percent}%)`;
}

// Calculate on page load
calculateCosts();

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});
