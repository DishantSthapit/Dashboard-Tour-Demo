
# Professional Dashboard

A professional dashboard built with HTML, CSS, Bootstrap, and JavaScript. This dashboard includes a user list, various charts for analytics, and a stylish top menu bar. [Demo](https://dashboard-tour-demo.netlify.app/) 

## Features

- Responsive design
- User list with avatars and roles
- Various charts for analytics (Sales Overview, Monthly Sales, Revenue Overview, Quarterly Revenue, User Growth, New vs Returning Users, Engagement Rate, Likes vs Comments vs Shares)
- Stylish top menu bar
- Animation effects using Animate.css
- Background effect using Vanta.js

## Technologies Used

- HTML
- CSS
- Bootstrap
- JavaScript
- Chart.js
- Animate.css
- Vanta.js

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/professional-dashboard.git
   ```
2. Open the project directory:
   ```sh
   cd professional-dashboard
   ```
3. Open `index.html` in your browser to view the dashboard.

## Customization

### Add New Users

To add new users to the user list, update the HTML structure in the `index.html` file. Each user should be added as a list item with the following structure:

```html
<li class="list-group-item d-flex justify-content-between align-items-center">
    <div class="user-info">
        <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User Avatar" class="rounded-circle mr-2">
        John Doe
    </div>
    <span class="badge badge-primary badge-pill">Admin</span>
</li>
```

### Modify Charts

The charts are created using Chart.js. You can find the chart configuration in the `script.js` file. To modify the charts, update the data and options within the respective chart initialization code:

```javascript
var salesChart = new Chart(document.getElementById('salesChart'), {
    type: 'line',
    data: {
        // Your data here
    },
    options: {
        // Your options here
    }
});
```

## Screenshots
<img width="1496" alt="Screenshot 2024-07-21 at 10 10 04 pm" src="https://github.com/user-attachments/assets/c3ed7690-c8c1-4f8d-b264-f1ac204d088e">


