import React, { HTMLAttributes, useContext, useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useTheme } from '@mui/styles';
import { ChartStyle } from './index.style';
import { PlatformContext } from 'contexts';
import { ThemeType } from 'consts';

interface DataPoint {
  x: number;
  y: number;
}

export interface IChartProps extends HTMLAttributes<HTMLDivElement> {
  className?: string,
  data: DataPoint[],
  dots?: boolean,
  gradient?: boolean,
}

export const Chart: React.FC<IChartProps> = ({ className, data, dots, gradient }) => {
  const theme: any = useTheme();
  const { getThemeType } = useContext(PlatformContext);

  const svgRef = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      if (svgRef.current) {
        setWidth(svgRef.current.getBoundingClientRect().width);
        setHeight(svgRef.current.getBoundingClientRect().height);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [svgRef]);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    while (svgRef.current && svgRef.current.firstChild) {
      svgRef.current.removeChild(svgRef.current.firstChild);
    }

    if (!width || !height) return;
    // Set up scales
    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(data, (d) => d.x) as [number, number])
      .range([0, width]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.y) as number])
      .range([height, 20]);

    // Set up area generator
    const area = d3
      .area<DataPoint>()
      .x((d) => xScale(d.x))
      .y0(yScale(0))
      .y1((d) => yScale(d.y));

    // Define gradient
    const graidentSvg = svg.append('defs')
      .append('linearGradient')
      .attr('id', 'chart-gradient')
      .attr('x1', '0%')
      .attr('y1', '0%')
      .attr('x2', '0%')
      .attr('y2', '100%');

    graidentSvg.append('stop')
      .attr('offset', '0%')
      .attr('stop-color', theme.primary[2.5]);

    graidentSvg.append('stop')
      .attr('offset', '100%')
      .attr('stop-color', getThemeType() === ThemeType.Light ? 'rgba(242, 245, 249, 0.25)' : 'rgba(45, 33, 102, 0.25)');

    // Draw area path
    svg
      .append('path')
      .datum(data)
      .attr('d', area)
      .attr('fill', gradient ? 'url(#chart-gradient)' : theme.lightcurve[0]);

    if (gradient) {
      // Set up line generator
      const line = d3
        .line<DataPoint>()
        .x((d) => xScale(d.x))
        .y((d) => yScale(d.y));

      // Draw line connecting data points
      svg
        .append('path')
        .datum(data)
        .attr('d', line)
        .attr('fill', 'none')
        .attr('stroke', theme.lightcurve[0])
        .attr('stroke-width', 2);
    }

    if (dots) {
      // Draw circles at data points
      svg.selectAll('circle')
        .data(data)
        .enter()
        .append('circle')
        .attr('cx', (d) => xScale(d.x))
        .attr('cy', (d) => yScale(d.y))
        .attr('r', 3)
        .attr('fill', theme.primary[1])
        .attr('stroke', theme.lightcurve[0])
        .attr('stroke-width', 1);
    }
  }, [data, height, width, dots, gradient, getThemeType, theme]);

  return (
    <ChartStyle className={className}>
      <svg ref={svgRef}>
        <g></g>
      </svg>
    </ChartStyle>
  );
};
