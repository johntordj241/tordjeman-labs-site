import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, DollarSign, Users, Target, Activity, Download, Calendar } from 'lucide-react';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { createClient } from '@supabase/supabase-js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface KPIMetric {
  metric_name: string;
  metric_value: number;
  metric_type: string;
  period: string;
}

interface Analytics {
  total_users: number;
  active_users: number;
  total_projects: number;
  completed_projects: number;
  total_revenue: number;
  conversion_rate: number;
}

export default function KPI() {
  const [metrics, setMetrics] = useState<KPIMetric[]>([]);
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [period, setPeriod] = useState('monthly');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, [period]);

  const loadData = async () => {
    setLoading(true);
    try {
      const { data: metricsData } = await supabase
        .from('kpi_metrics')
        .select('*')
        .eq('period', period)
        .order('date', { ascending: false });

      const { data: analyticsData } = await supabase
        .from('platform_analytics')
        .select('*')
        .order('recorded_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      setMetrics(metricsData || []);
      setAnalytics(analyticsData);
    } catch (error) {
      console.error('Error loading KPI data:', error);
    } finally {
      setLoading(false);
    }
  };

  const getMetricByType = (type: string) => {
    return metrics.find(m => m.metric_type === type);
  };

  const revenueData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Revenus (€)',
        data: [85000, 92000, 98000, 105000, 112000, 118000, 125000, 132000, 138000, 145000, 152000, 160000],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const usersData = {
    labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'],
    datasets: [
      {
        label: 'Nouveaux Utilisateurs',
        data: [320, 450, 580, 720, 890, 1050, 1250, 1420, 1580, 1740, 1920, 2100],
        backgroundColor: 'rgba(34, 197, 94, 0.8)',
      }
    ]
  };

  const projectsData = {
    labels: ['Terminés', 'En cours', 'Planifiés', 'En attente'],
    datasets: [
      {
        data: [567, 198, 77, 42],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(251, 146, 60, 0.8)',
          'rgba(148, 163, 184, 0.8)'
        ],
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)'
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };

  const kpiCards = [
    {
      title: 'Revenus Totaux',
      value: analytics?.total_revenue ? `${(analytics.total_revenue / 1000000).toFixed(2)}M €` : '0€',
      change: '+12.5%',
      trend: 'up',
      icon: DollarSign,
      color: 'blue'
    },
    {
      title: 'Utilisateurs Actifs',
      value: analytics?.active_users || 0,
      change: '+8.2%',
      trend: 'up',
      icon: Users,
      color: 'green'
    },
    {
      title: 'Taux de Conversion',
      value: `${analytics?.conversion_rate || 0}%`,
      change: '+2.4%',
      trend: 'up',
      icon: Target,
      color: 'orange'
    },
    {
      title: 'Taux de Croissance',
      value: `${getMetricByType('growth')?.metric_value || 0}%`,
      change: '-0.8%',
      trend: 'down',
      icon: Activity,
      color: 'red'
    }
  ];

  const exportData = () => {
    const dataStr = JSON.stringify({ metrics, analytics }, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = `kpi-report-${new Date().toISOString().split('T')[0]}.json`;
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (loading) {
    return (
      <div className="pt-24 pb-16 min-h-screen bg-gray-50">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Tableau de Bord KPI</h1>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-200">
              <Calendar className="h-5 w-5 text-gray-500" />
              <select
                value={period}
                onChange={(e) => setPeriod(e.target.value)}
                className="border-0 focus:ring-0 text-sm font-medium"
              >
                <option value="daily">Journalier</option>
                <option value="weekly">Hebdomadaire</option>
                <option value="monthly">Mensuel</option>
                <option value="yearly">Annuel</option>
              </select>
            </div>
            <button
              onClick={exportData}
              className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Download className="h-5 w-5" />
              <span>Exporter</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpiCards.map((card, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${card.color}-100`}>
                  <card.icon className={`h-6 w-6 text-${card.color}-600`} />
                </div>
                <div className={`flex items-center space-x-1 text-sm font-medium ${
                  card.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {card.trend === 'up' ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  <span>{card.change}</span>
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-600 mb-1">{card.title}</h3>
              <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Évolution des Revenus</h3>
            <div style={{ height: '300px' }}>
              <Line data={revenueData} options={chartOptions} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Croissance Utilisateurs</h3>
            <div style={{ height: '300px' }}>
              <Bar data={usersData} options={chartOptions} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Répartition des Projets</h3>
            <div style={{ height: '300px' }}>
              <Doughnut data={projectsData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Métriques Détaillées</h3>
            <div className="space-y-4">
              {metrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{metric.metric_name}</p>
                    <p className="text-xs text-gray-500 mt-1">Type: {metric.metric_type}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-gray-900">{metric.metric_value}</p>
                    <p className="text-xs text-gray-500 mt-1">Période: {metric.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
