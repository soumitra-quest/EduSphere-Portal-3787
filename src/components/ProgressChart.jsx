import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';
import { format } from 'date-fns';

export default function ProgressChart({ data, period = 'week' }) {
  const getChartOptions = () => ({
    tooltip: {
      trigger: 'axis',
      formatter: (params) => {
        const [param] = params;
        return `${param.name}: ${param.value} hours`;
      }
    },
    xAxis: {
      type: 'category',
      data: Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return format(date, 'EEE');
      }).reverse(),
      axisLine: { show: false },
      axisTick: { show: false },
    },
    yAxis: {
      type: 'value',
      name: 'Hours',
      nameLocation: 'middle',
      nameGap: 40,
      splitLine: { show: true, lineStyle: { type: 'dashed' } },
      axisLine: { show: false },
      axisTick: { show: false },
    },
    series: [{
      name: 'Study Time',
      type: 'line',
      smooth: true,
      symbolSize: 8,
      data: data || [2, 4, 3, 5, 3, 6, 4],
      itemStyle: {
        color: '#0ea5e9'
      },
      areaStyle: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: 'rgba(14, 165, 233, 0.2)'
          }, {
            offset: 1,
            color: 'rgba(14, 165, 233, 0)'
          }],
        }
      }
    }],
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    }
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full h-[300px]"
    >
      <ReactECharts 
        option={getChartOptions()} 
        style={{ height: '100%', width: '100%' }}
        opts={{ renderer: 'svg' }}
      />
    </motion.div>
  );
}