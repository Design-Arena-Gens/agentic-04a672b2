"use client";
import { useMemo, useState } from "react";

export default function RoiPage() {
  const [numEmployees, setNumEmployees] = useState(20);
  const [hourlyWage, setHourlyWage] = useState(1500);
  const [minutesSavedPerDay, setMinutesSavedPerDay] = useState(20);
  const [workDaysPerMonth, setWorkDaysPerMonth] = useState(20);
  const [convRevenuePerMonth, setConvRevenuePerMonth] = useState(1000000);
  const [convLiftPct, setConvLiftPct] = useState(5);
  const [toolCost, setToolCost] = useState(30000);
  const [consultingFee, setConsultingFee] = useState(200000);

  const monthlyBenefit = useMemo(() => {
    const timeSavedHours = (minutesSavedPerDay / 60) * workDaysPerMonth;
    const timeValue = numEmployees * timeSavedHours * hourlyWage;
    const revenueLift = (convRevenuePerMonth * convLiftPct) / 100;
    return Math.round(timeValue + revenueLift);
  }, [numEmployees, hourlyWage, minutesSavedPerDay, workDaysPerMonth, convRevenuePerMonth, convLiftPct]);

  const monthlyROI = useMemo(() => {
    const net = monthlyBenefit - toolCost - consultingFee;
    const denom = toolCost + consultingFee;
    if (denom <= 0) return 0;
    return Math.round((net / denom) * 100);
  }, [monthlyBenefit, toolCost, consultingFee]);

  return (
    <div className="content">
      <h1>AI?????ROI??</h1>
      <p className="lead">5???????????????????????</p>

      <div className="card grid2">
        <div>
          <h3>????</h3>
          <label>????
            <input type="number" value={numEmployees} onChange={(e)=>setNumEmployees(Number(e.target.value)||0)} min={0} />
          </label>
          <label>???????
            <input type="number" value={hourlyWage} onChange={(e)=>setHourlyWage(Number(e.target.value)||0)} min={0} />
          </label>
          <label>1???????????/??
            <input type="number" value={minutesSavedPerDay} onChange={(e)=>setMinutesSavedPerDay(Number(e.target.value)||0)} min={0} />
          </label>
          <label>?????/??
            <input type="number" value={workDaysPerMonth} onChange={(e)=>setWorkDaysPerMonth(Number(e.target.value)||0)} min={0} />
          </label>
          <label>??????????
            <input type="number" value={convRevenuePerMonth} onChange={(e)=>setConvRevenuePerMonth(Number(e.target.value)||0)} min={0} />
          </label>
          <label>CV????%?
            <input type="number" value={convLiftPct} onChange={(e)=>setConvLiftPct(Number(e.target.value)||0)} min={0} />
          </label>
          <label>??????????
            <input type="number" value={toolCost} onChange={(e)=>setToolCost(Number(e.target.value)||0)} min={0} />
          </label>
          <label>???????????
            <input type="number" value={consultingFee} onChange={(e)=>setConsultingFee(Number(e.target.value)||0)} min={0} />
          </label>
        </div>
        <div>
          <h3>????</h3>
          <div className="stat">
            <div className="stat-title">???????????????</div>
            <div className="stat-value">{monthlyBenefit.toLocaleString()} ?/?</div>
          </div>
          <div className="stat">
            <div className="stat-title">??ROI</div>
            <div className={`stat-value ${monthlyROI>=0?"pos":"neg"}`}>{monthlyROI}%</div>
          </div>
          <p className="hint">? ?????????/????????
          ??AI????RAG????????????????
          KPI?????????????????????????</p>
          <a className="button" href="/">?????????</a>
        </div>
      </div>
    </div>
  );
}
