const mapping: Record<string, string> = {
  customers: 'customer',
  inquiries: 'inquiry',
  'knowledge-base-articles': 'knowledge_base_article',
  leads: 'lead',
  manufacturers: 'manufacturer',
  orders: 'order',
  products: 'product',
  quotes: 'quote',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
