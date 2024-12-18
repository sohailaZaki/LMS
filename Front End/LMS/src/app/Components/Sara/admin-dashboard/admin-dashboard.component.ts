import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  standalone:false,
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent implements AfterViewInit {
  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.renderTotalUsersChart();
    this.renderStudentDynamicsChart();
  }

  renderTotalUsersChart() {
    const ctx = document.getElementById('totalUsersChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
          {
            label: 'Current Week',
            data: [50, 100, 150, 200, 250, 300, 350],
            borderColor: '#4caf50',
            tension: 0.4,
            fill: false,
          },
          {
            label: 'Previous Week',
            data: [40, 80, 120, 160, 200, 240, 280],
            borderColor: '#2196f3',
            tension: 0.4,
            borderDash: [5, 5],
            fill: false,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures the chart adapts to the container dimensions
    
        plugins: {
          legend: {
            position: 'top',
          },
        },
      },
    });
  }

  renderStudentDynamicsChart() {
    const ctx = document.getElementById('studentDynamicsChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Student Dynamics',
            data: [100, 200, 150, 300, 250, 400, 350, 300, 250, 400, 450, 500],
            backgroundColor: '#3f51b5',
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false, // Ensures the chart adapts to the container dimensions
        
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
