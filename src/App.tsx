import React, { useState } from 'react';
import QRGenerator from './QRGenerator';
import { 
  TrendingUp, 
  TrendingDown, 
  AlertCircle, 
  CheckCircle, 
  CreditCard, 
  PieChart, 
  BarChart3, 
  Target,
  FileText,
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Star,
  ArrowUp,
  ArrowDown,
  Info,
  Menu,
  Bell,
  User,
  Home,
  ChevronRight,
  Phone,
  Mail
} from 'lucide-react';

interface CreditData {
  score: number;
  grade: string;
  rank: string;
  previousScore: number;
  scoreChange: number;
}

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showQR, setShowQR] = useState(false);
  
  const creditData: CreditData = {
    score: 780,
    grade: 'A',
    rank: '상위 15%',
    previousScore: 745,
    scoreChange: 35
  };

  const monthlyData = [
    { month: '1월', score: 720 },
    { month: '2월', score: 735 },
    { month: '3월', score: 760 },
    { month: '4월', score: 750 },
    { month: '5월', score: 765 },
    { month: '6월', score: 780 },
  ];

  const ScoreGauge = ({ score }: { score: number }) => {
    const percentage = (score / 950) * 100;
    const strokeDasharray = `${percentage * 2.83} 283`;
    
    return (
      <div className="relative w-32 h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="#f3f4f6"
            strokeWidth="8"
            fill="transparent"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{score}</div>
            <div className="text-xs text-gray-600">점</div>
          </div>
        </div>
      </div>
    );
  };

  const renderHome = () => (
    <div className="space-y-4">
      {/* Credit Score Cards */}
      <div className="grid grid-cols-2 gap-3">
        {/* NICE 신용평가 카드 */}
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="mb-3">
            <h2 className="text-sm font-bold">NICE 신용평가</h2>
            <p className="text-amber-100 text-xs">기존 신용평가</p>
          </div>
          <div className="text-center mb-3">
            <div className="text-2xl font-bold">720</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-xs text-amber-100">업종 내 상위 35%</div>
          </div>
        </div>

        {/* KB 대안신용평가 카드 */}
        <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl p-4 text-white shadow-lg">
          <div className="mb-3">
            <h2 className="text-sm font-bold">KB S-Score</h2>
            <p className="text-amber-100 text-xs">대안 데이터 기반</p>
          </div>
          <div className="text-center mb-3">
            <div className="text-2xl font-bold">{creditData.score}</div>
          </div>
          <div className="flex items-center justify-center">
            <ArrowUp className="w-3 h-3 mr-1" />
            <span className="text-xs">+{creditData.scoreChange}점</span>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-3">
        <button 
          onClick={() => setActiveTab('analysis')}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">점수 분석</div>
              <div className="text-xs text-gray-500 mt-1">상세 변동 요인</div>
            </div>
            <TrendingUp className="w-6 h-6 text-amber-500" />
          </div>
        </button>
        
        <button 
          onClick={() => setActiveTab('loans')}
          className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className="text-left">
              <div className="text-sm font-medium text-gray-900">대출 상품</div>
              <div className="text-xs text-gray-500 mt-1">맞춤 추천</div>
            </div>
            <CreditCard className="w-6 h-6 text-amber-500" />
          </div>
        </button>
      </div>

      {/* Business Performance */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">사업 현황</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">2,850만원</div>
            <div className="text-xs text-gray-500">월평균 매출</div>
            <div className="text-xs text-green-600">+12% ↑</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">1,240명</div>
            <div className="text-xs text-gray-500">월 방문객</div>
            <div className="text-xs text-blue-600">+8% ↑</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">4.6/5.0</div>
            <div className="text-xs text-gray-500">고객 평점</div>
            <div className="text-xs text-yellow-600">89개 리뷰</div>
          </div>
        </div>
      </div>

      {/* Recent Updates */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">최근 업데이트</h3>
        <div className="space-y-3">
          <div className="flex items-start">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">POS 매출 데이터 업데이트</div>
              <div className="text-xs text-gray-500">2시간 전</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">공과금 납부 확인</div>
              <div className="text-xs text-gray-500">1일 전</div>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
            <div className="flex-1">
              <div className="text-sm font-medium text-gray-900">온라인 리뷰 분석 완료</div>
              <div className="text-xs text-gray-500">2일 전</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderAnalysis = () => (
    <div className="space-y-4">
      {/* Score Trend */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">점수 변화 추이</h3>
        <div className="h-40 flex items-end justify-between space-x-1">
          {monthlyData.map((data, index) => (
            <div key={index} className="flex flex-col items-center flex-1">
              <div
                className="bg-gradient-to-t from-amber-400 to-orange-500 w-full rounded-t transition-all duration-500"
                style={{ 
                  height: `${(data.score - 650) / 2}px`,
                  minHeight: '20px'
                }}
              />
              <div className="text-xs text-gray-600 mt-2">{data.month}</div>
              <div className="text-xs font-medium text-gray-900">{data.score}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Positive Factors */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-green-700 mb-3 flex items-center">
          <TrendingUp className="w-4 h-4 mr-2" />
          긍정적 요인 (+25점)
        </h3>
        <div className="space-y-3">
          <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
            <div className="font-medium text-green-800 text-sm">POS 매출 증가 (+15점)</div>
            <div className="text-xs text-green-600 mt-1">
              지난 3개월간 평균 매출이 15% 증가하여 상환능력이 크게 개선되었습니다.
            </div>
          </div>
          
          <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded-r">
            <div className="font-medium text-green-800 text-sm">공과금 완전납부 (+10점)</div>
            <div className="text-xs text-green-600 mt-1">
              전기요금, 가스요금, 통신비 모두 정기적으로 납부하여 안정성을 입증했습니다.
            </div>
          </div>
        </div>
      </div>

      {/* Improvement Areas */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-red-700 mb-3 flex items-center">
          <TrendingDown className="w-4 h-4 mr-2" />
          개선 필요 요인 (-10점)
        </h3>
        <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded-r">
          <div className="font-medium text-red-800 text-sm">현금 거래 비중 증가 (-10점)</div>
          <div className="text-xs text-red-600 mt-1">
            전체 거래 중 현금 비중이 40%로 증가하여 거래 투명성이 다소 저하되었습니다.
          </div>
          <div className="text-xs text-red-500 mt-2 font-medium">
            개선방안: 카드결제 이벤트 진행, 간편결제 도입
          </div>
        </div>
      </div>
    </div>
  );

  const renderLoans = () => (
    <div className="space-y-4">
      {/* Recommended Loans */}
      <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl p-4 text-white">
        <h3 className="font-semibold mb-2">맞춤 추천 상품</h3>
        <p className="text-sm text-amber-100">귀하의 신용점수 {creditData.score}점 기준</p>
      </div>

      {/* Government Loans */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">🏛️ 정책자금</h3>
        <div className="space-y-3">
          <div className="border border-blue-200 rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-blue-800 text-sm">소상공인 시설자금</div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">추천</div>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• 한도: 2억원</div>
              <div>• 금리: 연 2.5%</div>
              <div>• 승인 확률: 92%</div>
            </div>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs w-full">
              신청하기
            </button>
          </div>
          
          <div className="border border-blue-200 rounded-lg p-3">
            <div className="font-medium text-blue-800 text-sm mb-2">코로나19 특별자금</div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• 한도: 1억원</div>
              <div>• 금리: 연 1.5%</div>
              <div>• 승인 확률: 89%</div>
            </div>
            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded text-xs w-full">
              신청하기
            </button>
          </div>
        </div>
      </div>

      {/* Bank Loans */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">🏦 KB국민은행 상품</h3>
        <div className="space-y-3">
          <div className="border border-amber-200 rounded-lg p-3 bg-amber-50">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-amber-800 text-sm">KB 소상공인 특판대출</div>
              <div className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-xs">최적</div>
            </div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• 한도: 5천만원</div>
              <div>• 금리: 연 4.2%</div>
              <div>• 승인 확률: 85%</div>
            </div>
            <button className="mt-2 bg-amber-600 text-white px-3 py-1 rounded text-xs w-full">
              KB앱에서 신청
            </button>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-3">
            <div className="font-medium text-gray-800 text-sm mb-2">KB 사업자신용대출</div>
            <div className="text-xs text-gray-600 space-y-1">
              <div>• 한도: 3천만원</div>
              <div>• 금리: 연 4.8%</div>
              <div>• 승인 확률: 78%</div>
            </div>
            <button className="mt-2 bg-gray-600 text-white px-3 py-1 rounded text-xs w-full">
              상담 신청
            </button>
          </div>
        </div>
      </div>

      {/* Required Documents */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-medium text-gray-800 mb-2 text-sm">📋 필요서류 자동생성</h4>
        <div className="text-xs text-gray-600">
          대안신용평가 시스템 연동으로 다음 서류가 자동 생성됩니다:<br/>
          ✓ 매출증명서 (POS 데이터 기반)<br/>
          ✓ 사업자등록증명원<br/>
          ✓ 임대차계약서
        </div>
      </div>
    </div>
  );

  const renderGuide = () => (
    <div className="space-y-4">
      {/* Core Variable Introduction */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
          <h3 className="font-semibold text-gray-900">대안신용평가 핵심변수 #1</h3>
        </div>
        <h2 className="text-xl font-bold text-amber-700 mb-2">현금흐름 안정성 분석</h2>
        <p className="text-sm text-gray-600 mb-3">
          현금흐름 안정성은 대안신용평가 모델의 주요 변수 중 하나입니다. 매출의 일관성과 예측 가능성을 통해 상환능력을 평가합니다.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium text-amber-800">현재 안정성 점수</div>
              <div className="text-xs text-amber-600">12개월 데이터 기준</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-amber-700">78점</div>
              <div className="text-xs text-amber-600">상위 25%</div>
            </div>
          </div>
        </div>
      </div>

      {/* Cash Flow Visualization */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-4">📊 년도별 현금흐름 추이 분석</h3>
        
        {/* Monthly Cash Flow Chart */}
        <div className="mb-4 relative">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">년도별 현금흐름 (단위: 억원)</span>
            <span className="text-xs text-gray-500">최근 5년</span>
          </div>
          <div className="h-32 flex items-end justify-between space-x-1 relative">
            {[
              { year: '2021', inflow: 2.8, outflow: 2.5 },
              { year: '2022', inflow: 3.2, outflow: 2.8 },
              { year: '2023', inflow: 3.6, outflow: 3.1 },
              { year: '2024', inflow: 4.1, outflow: 3.4 },
              { year: '2025', inflow: 3.8, outflow: 3.2 }
            ].map((data, index) => (
              <div key={index} className="flex flex-col items-center flex-1 relative group">
                <div className="w-full flex flex-col items-center space-y-1">
                  {/* Inflow bar */}
                  <div
                    className="bg-gradient-to-t from-yellow-400 to-yellow-500 w-full rounded-t"
                    style={{ 
                      height: `${(data.inflow - 2) * 30}px`,
                      minHeight: '15px'
                    }}
                  />
                  {/* Outflow bar */}
                  <div
                    className="bg-gradient-to-t from-orange-500 to-orange-600 w-full rounded-b"
                    style={{ 
                      height: `${(data.outflow - 2) * 30}px`,
                      minHeight: '12px'
                    }}
                  />
                </div>
                <div className="text-xs text-gray-600 mt-1">{data.year}</div>
                
                {/* Tooltip */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                  <div className="flex flex-col space-y-1">
                    {/* Inflow Tooltip */}
                    <div className="bg-yellow-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg">
                      <div className="font-medium">유입</div>
                      <div>{data.inflow}억원</div>
                    </div>
                    
                    {/* Outflow Tooltip */}
                    <div className="bg-orange-600 text-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg">
                      <div className="font-medium">유출</div>
                      <div>{data.outflow}억원</div>
                    </div>
                    
                    {/* Net Inflow Tooltip */}
                    <div className="bg-orange-500 text-white px-2 py-1 rounded text-xs whitespace-nowrap shadow-lg">
                      <div className="font-medium">순유입</div>
                      <div>{(data.inflow - data.outflow).toFixed(1)}억원</div>
                    </div>
                  </div>
                  
                  {/* Arrow pointer */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-orange-500"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mt-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded mr-1"></div>
              <span className="text-xs text-gray-600">유입</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded mr-1"></div>
              <span className="text-xs text-gray-600">유출</span>
            </div>
          </div>
        </div>

        {/* Stability Metrics */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-blue-700">8.3%</div>
            <div className="text-xs text-blue-600">변동계수(CV)</div>
            <div className="text-xs text-gray-500 mt-1">낮을수록 안정</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-green-700">+12.8%</div>
            <div className="text-xs text-green-600">연평균 성장률</div>
            <div className="text-xs text-gray-500 mt-1">지속적 증가</div>
          </div>
        </div>
      </div>

      {/* Stability Assessment */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">🎯 안정성 평가 결과</h3>
        <div className="space-y-3">
          <div className="bg-amber-50 border-l-4 border-amber-400 p-3 rounded-r">
            <div className="font-medium text-amber-800 text-sm">✅ 우수한 현금흐름 패턴</div>
            <div className="text-xs text-amber-600 mt-1">
              지난 5년간 현금흐름이 지속적으로 개선되고 있으며, 변동성이 업종 평균(15.2%) 대비 
              낮은 수준(8.3%)을 유지하고 있습니다.
            </div>
          </div>
          
          <div className="bg-orange-50 border-l-4 border-orange-400 p-3 rounded-r">
            <div className="font-medium text-orange-800 text-sm">📈 업종별 벤치마크 비교</div>
            <div className="text-xs text-orange-600 mt-1">
              <div className="grid grid-cols-2 gap-2 mt-2">
                <div>• 동일업종 평균: 65점</div>
                <div>• 귀하의 점수: <span className="font-semibold">78점</span></div>
                <div>• 상위 10% 기준: 85점</div>
                <div>• 개선 여지: <span className="font-semibold">+7점</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Improvement Strategies */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">🚀 현금흐름 안정성 개선방안</h3>
        <div className="space-y-3">
          {/* High Impact, Easy Implementation */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-amber-800 text-sm">정기 수입원 확보</div>
              <div className="flex space-x-1">
                <span className="bg-amber-200 text-amber-800 px-2 py-1 rounded text-xs">높은효과</span>
              </div>
            </div>
            <div className="text-xs text-amber-600 space-y-1">
              <div>• 멤버십/구독 서비스 도입으로 고정 수입 창출</div>
              <div>• 정기 배송/픽업 서비스 운영</div>
              <div>• <span className="font-semibold">예상 효과:</span> 안정성 점수 +12점, 신용점수 +25점</div>
            </div>
          </div>
          
          {/* Medium Impact, Medium Implementation */}
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-orange-800 text-sm">계절성 리스크 관리</div>
              <div className="flex space-x-1">
                <span className="bg-orange-200 text-orange-800 px-2 py-1 rounded text-xs">중간효과</span>
              </div>
            </div>
            <div className="text-xs text-orange-600 space-y-1">
              <div>• 비수기 대비 상품 다각화 (계절 메뉴, 이벤트)</div>
              <div>• 현금 준비금 적정 수준 유지 (월 평균 지출의 2개월분)</div>
              <div>• <span className="font-semibold">예상 효과:</span> 안정성 점수 +8점, 신용점수 +15점</div>
            </div>
          </div>

          {/* Long-term Strategy */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <div className="flex justify-between items-start mb-2">
              <div className="font-medium text-yellow-800 text-sm">수익구조 다변화</div>
              <div className="flex space-x-1">
                <span className="bg-yellow-200 text-yellow-800 px-2 py-1 rounded text-xs">높은효과</span>
              </div>
            </div>
            <div className="text-xs text-yellow-600 space-y-1">
              <div>• 온라인 판매 채널 확대 (배달앱, 자체 온라인몰)</div>
              <div>• 부가 서비스 개발 (케이터링, 원두 판매 등)</div>
              <div>• <span className="font-semibold">예상 효과:</span> 안정성 점수 +15점, 신용점수 +30점</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProfile = () => (
    <div className="space-y-4">
      {/* User Info */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center">
            <User className="w-8 h-8 text-white" />
          </div>
          <div className="ml-4">
            <h3 className="font-semibold text-gray-900">홍길동 사장님</h3>
            <p className="text-sm text-gray-600">카페 아메리치노</p>
            <p className="text-xs text-gray-500">강남구 · 업력 3년 2개월</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-amber-50 rounded-lg p-3">
            <div className="text-lg font-bold text-amber-700">{creditData.score}</div>
            <div className="text-xs text-amber-600">현재 신용점수</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <div className="text-lg font-bold text-orange-700">{creditData.grade}등급</div>
            <div className="text-xs text-orange-600">신용등급</div>
          </div>
        </div>
      </div>

      {/* Business Info */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">사업장 정보</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <Building2 className="w-4 h-4 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium">카페 아메리치노</div>
              <div className="text-xs text-gray-500">음식점업 · 커피전문점</div>
            </div>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium">서울시 강남구 테헤란로</div>
              <div className="text-xs text-gray-500">역세권 상권</div>
            </div>
          </div>
          <div className="flex items-center">
            <Calendar className="w-4 h-4 text-gray-400 mr-3" />
            <div>
              <div className="text-sm font-medium">2020년 11월 개업</div>
              <div className="text-xs text-gray-500">업력 3년 2개월</div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
        <h3 className="font-semibold text-gray-900 mb-3">고객센터</h3>
        <div className="space-y-3">
          <button className="flex items-center w-full p-3 bg-amber-50 rounded-lg">
            <Phone className="w-4 h-4 text-amber-600 mr-3" />
            <div className="text-left">
              <div className="text-sm font-medium text-amber-800">전화 상담</div>
              <div className="text-xs text-amber-600">1588-9999</div>
            </div>
            <ChevronRight className="w-4 h-4 text-amber-600 ml-auto" />
          </button>
          
          <button className="flex items-center w-full p-3 bg-orange-50 rounded-lg">
            <Mail className="w-4 h-4 text-orange-600 mr-3" />
            <div className="text-left">
              <div className="text-sm font-medium text-orange-800">이메일 문의</div>
              <div className="text-xs text-orange-600">help@kbcredit.co.kr</div>
            </div>
            <ChevronRight className="w-4 h-4 text-orange-600 ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );

  const bottomNavItems = [
    { id: 'home', name: '홈', icon: Home },
    { id: 'analysis', name: '분석', icon: BarChart3 },
    { id: 'loans', name: '대출', icon: CreditCard },
    { id: 'guide', name: '가이드', icon: Target },
    { id: 'profile', name: '내정보', icon: User },
  ];

  return (
    <div className="min-h-screen bg-gray-50 max-w-md mx-auto relative">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-400 to-orange-500 text-white p-4 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mr-3">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-lg">KB 소상공인</h1>
              <p className="text-xs text-amber-100">대안신용평가</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Bell className="w-5 h-5" />
            <button 
              onClick={() => setShowQR(!showQR)}
              className="w-5 h-5 hover:bg-white hover:bg-opacity-20 rounded p-0.5 transition-colors"
              title="QR 코드 보기"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zM3 21h8v-8H3v8zm2-6h4v4H5v-4zM13 3v8h8V3h-8zm6 6h-4V5h4v4zM19 13h2v2h-2zM13 13h2v2h-2zM15 15h2v2h-2zM13 17h2v2h-2zM15 19h2v2h-2zM17 17h2v2h-2zM17 19h2v2h-2zM19 17h2v2h-2z"/>
              </svg>
            </button>
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </header>

      {/* QR Code Modal */}
      {showQR && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={() => setShowQR(false)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors z-10"
            >
              ×
            </button>
            <QRGenerator url={window.location.href} size={250} />
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="px-4 py-4 pb-20">
        {activeTab === 'home' && renderHome()}
        {activeTab === 'analysis' && renderAnalysis()}
        {activeTab === 'loans' && renderLoans()}
        {activeTab === 'guide' && renderGuide()}
        {activeTab === 'profile' && renderProfile()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
        <div className="flex">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex-1 py-2 px-1 text-center transition-colors ${
                  activeTab === item.id
                    ? 'text-amber-600'
                    : 'text-gray-400'
                }`}
              >
                <Icon className="w-5 h-5 mx-auto mb-1" />
                <div className="text-xs font-medium">{item.name}</div>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;