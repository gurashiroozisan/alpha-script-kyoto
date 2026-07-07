const DEMO_PORTFOLIO_BASE = 'https://demo-portfolio-six-mu.vercel.app/';
const PORTFOLIO = [
  { type: 'tool', title: 'SyncBridge API連携', category: '業務自動化', desc: '注文・問い合わせをAPI/Webhook経由で自動同期。', url: 'api-sync-demo/index.html', thumb: 'api-sync-demo/assets/images/preview.png', badge: 'Tool' },
  { type: 'tool', title: 'FlowBoard カンバン', category: '業務ツール', desc: 'ドラッグ操作で案件ステータスを管理。', url: 'kanban-demo/index.html', thumb: 'kanban-demo/assets/images/preview.png', badge: 'Tool' },
  { type: 'tool', title: 'CRM Lite 顧客管理', category: '業務ツール', desc: '顧客情報と商談状況を一元管理。', url: 'crm-demo/index.html', thumb: 'crm-demo/assets/images/preview.png', badge: 'Tool' },
  { type: 'tool', title: 'SalesFlow 売上集計', category: '業務自動化', desc: 'Excel/CSV集計を自動化するダッシュボード。', url: 'automation-demo/index.html', thumb: 'automation-demo/assets/images/preview.png', badge: 'Tool' },
  { type: 'lp', title: '美容室 LUMIÈRE', category: '美容・サロン', desc: '予約導線付き美容室LP。', url: 'salon-lp/index.html', thumb: 'salon-lp/assets/images/concept-main.jpg', badge: 'LP' },
  { type: 'lp', title: 'CAFÉ KOMOREBI', category: '飲食・カフェ', desc: 'こだわり訴求のカフェLP。', url: 'cafe-lp/index.html', thumb: 'cafe-lp/assets/images/hero.jpg', badge: 'LP' },
  { type: 'lp', title: 'TaskPilot', category: 'SaaS・アプリ', desc: 'SaaS向けプロダクトLP。', url: 'saas-lp/index.html', thumb: 'saas-lp/assets/images/preview.png', badge: 'LP' },
  { type: 'hp', title: '株式会社ネクストブリッジ', category: 'コーポレート', desc: 'コーポレートHPデモ。', url: 'corporate-hp/index.html', thumb: 'corporate-hp/assets/images/hero.jpg', badge: 'HP' },
  { type: 'hp', title: '株式会社アトラス 採用', category: '採用・リクルート', desc: '採用サイトデモ。', url: 'recruit-lp/index.html', thumb: 'recruit-lp/assets/images/hero.jpg', badge: 'HP' },
  { type: 'tool', title: 'MemberPortal 会員・決済', category: '業務ツール', desc: '会員情報・注文履歴・決済UI。', url: 'portal-demo/index.html', thumb: 'portal-demo/assets/images/preview.png', badge: 'Tool' }
];

function card(item) {
  const href = DEMO_PORTFOLIO_BASE + item.url;
  const img = DEMO_PORTFOLIO_BASE + item.thumb;
  return `
  <a href="${href}" target="_blank" rel="noopener noreferrer" class="group overflow-hidden rounded-xl border border-slate-800 bg-card transition hover:-translate-y-1 hover:border-accent">
    <img src="${img}" alt="${item.title}" class="h-44 w-full object-cover" onerror="this.src='/as-homepage/assets/logo.png';this.style.objectFit='contain';this.style.padding='1rem';">
    <div class="p-4">
      <span class="text-xs font-semibold text-accent">${item.category}</span>
      <h3 class="mt-1 text-lg font-bold text-slate-100">${item.title}</h3>
      <p class="mt-2 text-sm text-slate-300">${item.desc}</p>
    </div>
  </a>`;
}

document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('portfolioGrid');
  const count = document.getElementById('portfolioCount');
  const btns = document.querySelectorAll('[data-portfolio-filter]');
  if (!grid) return;

  const render = (type='all') => {
    const items = type === 'all' ? PORTFOLIO : PORTFOLIO.filter(x => x.type === type);
    grid.innerHTML = items.map(card).join('');
    if (count) count.textContent = `${items.length} 件を表示（全37件）`;
  };

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('bg-accent','text-white'));
      btn.classList.add('bg-accent','text-white');
      render(btn.dataset.portfolioFilter);
    });
  });

  render('all');
});

