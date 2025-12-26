import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const constructionData = [
  { phase: 'Q1 2025', progress: 15, invested: 85 },
  { phase: 'Q2 2025', progress: 35, invested: 220 },
  { phase: 'Q3 2025', progress: 60, invested: 420 },
  { phase: 'Q4 2025', progress: 85, invested: 680 },
  { phase: 'Q1 2026', progress: 100, invested: 850 },
];

const revenueProjection = [
  { year: '2026', revenue: 180, occupancy: 55 },
  { year: '2027', revenue: 340, occupancy: 72 },
  { year: '2028', revenue: 480, occupancy: 85 },
  { year: '2029', revenue: 560, occupancy: 88 },
  { year: '2030', revenue: 620, occupancy: 90 },
];

const hotelFeatures = [
  {
    title: 'Номерной фонд',
    description: '120 номеров премиум-класса с видом на море',
    icon: 'Building2',
    detail: 'От студий до люксов'
  },
  {
    title: 'Инфраструктура',
    description: 'SPA-центр, рестораны, конференц-залы, бассейн',
    icon: 'Sparkles',
    detail: '5 ресторанов и баров'
  },
  {
    title: 'Локация',
    description: 'Первая линия моря, курортная зона с развитой инфраструктурой',
    icon: 'MapPin',
    detail: '50м от пляжа'
  },
];

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <nav className="fixed top-0 w-full bg-secondary/95 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold text-secondary-foreground">Grand Marina Resort</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'about', label: 'О компании' },
                { id: 'portfolio', label: 'Портфолио' },
                { id: 'financials', label: 'Финансы' },
                { id: 'presentation', label: 'Материалы' },
                { id: 'contact', label: 'Контакты' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-secondary-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold leading-tight text-secondary">
                Инвестируйте в премиальный курортный отель
              </h2>
              <p className="text-xl text-muted-foreground">
                5-звездочный отель на берегу моря. Старт строительства — Q1 2025. Окупаемость 6 лет
              </p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection('financials')} size="lg" className="font-medium">
                  <Icon name="TrendingUp" className="mr-2" size={20} />
                  Финансовые показатели
                </Button>
                <Button onClick={() => scrollToSection('contact')} variant="outline" size="lg" className="font-medium">
                  Связаться с нами
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">850М ₽</div>
                  <div className="text-sm text-muted-foreground mt-1">Бюджет проекта</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">120</div>
                  <div className="text-sm text-muted-foreground mt-1">Номеров премиум</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-heading font-bold text-primary">6 лет</div>
                  <div className="text-sm text-muted-foreground mt-1">Окупаемость</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/5bc1fd9a-a76b-4ddb-8adb-3c711ff006bc/files/e80cc42c-4308-4d61-a5ca-5b68b765d50a.jpg" 
                  alt="Grand Marina Resort" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">О проекте</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Строительство премиального курортного отеля мирового уровня
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {hotelFeatures.map((feature, idx) => (
              <Card key={idx} className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <Icon name={feature.icon as any} className="mb-4 text-primary" size={40} />
                  <CardTitle className="font-heading">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">{feature.description}</p>
                  <p className="text-sm font-semibold text-primary">{feature.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Визуализация проекта</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Концепт-дизайн и архитектура будущего отеля
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video">
                <img 
                  src="https://cdn.poehali.dev/projects/5bc1fd9a-a76b-4ddb-8adb-3c711ff006bc/files/e80cc42c-4308-4d61-a5ca-5b68b765d50a.jpg" 
                  alt="Внешний вид отеля" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Экстерьер</CardTitle>
                <CardDescription>Современная архитектура в средиземноморском стиле</CardDescription>
              </CardHeader>
            </Card>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video">
                <img 
                  src="https://cdn.poehali.dev/projects/5bc1fd9a-a76b-4ddb-8adb-3c711ff006bc/files/2d4a3726-36b9-4181-860b-e9e5d8083c0e.jpg" 
                  alt="Интерьер отеля" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-heading">Интерьер</CardTitle>
                <CardDescription>Элегантный дизайн лобби и общественных зон</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="financials" className="py-20 px-6 bg-card">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Финансовые показатели</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            График строительства и прогноз доходности
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">График строительства</CardTitle>
                <CardDescription>Прогресс и инвестиции (млн ₽)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={constructionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="phase" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="progress" stroke="hsl(var(--primary))" strokeWidth={2} name="Прогресс %" />
                    <Line type="monotone" dataKey="invested" stroke="hsl(var(--accent))" strokeWidth={2} name="Инвестиции" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Прогноз доходности</CardTitle>
                <CardDescription>Выручка и загрузка (млн ₽ / %)</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={revenueProjection}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="revenue" fill="hsl(var(--primary))" name="Выручка" />
                    <Bar dataKey="occupancy" fill="hsl(var(--accent))" name="Загрузка %" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-2 border-primary">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Инвестиционное предложение</CardTitle>
              <CardDescription className="text-base">Привлечение инвестиций на строительство</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Объем привлечения</div>
                  <div className="text-2xl font-heading font-bold">350 млн ₽</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Ожидаемая доходность</div>
                  <div className="text-2xl font-heading font-bold">18-22% годовых</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Минимальный вход</div>
                  <div className="text-2xl font-heading font-bold">от 10 млн ₽</div>
                </div>
              </div>
              <div className="pt-4">
                <p className="text-muted-foreground mb-4">
                  Инвестиции будут направлены на завершение строительства, оснащение отеля и маркетинговую кампанию. Окупаемость проекта 6 лет
                </p>
                <Button onClick={() => scrollToSection('contact')} size="lg" className="w-full md:w-auto">
                  <Icon name="Mail" className="mr-2" size={20} />
                  Обсудить инвестиции
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="presentation" className="py-20 px-6 bg-muted">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Материалы для инвесторов</h3>
          <p className="text-center text-muted-foreground mb-12">
            Скачайте подробную информацию о компании и финансовые отчеты
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="FileText" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Презентация компании</CardTitle>
                <CardDescription>Подробная информация о бизнесе, команде и стратегии развития</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать PDF (2.4 МБ)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="BarChart3" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Финансовая отчетность</CardTitle>
                <CardDescription>Полная финансовая отчетность за последние 4 года с аудитом</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать PDF (1.8 МБ)
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="TrendingUp" className="text-primary" size={32} />
                </div>
                <CardTitle className="font-heading">Инвестиционный меморандум</CardTitle>
                <CardDescription>Детальная информация об инвестиционном раунде и условиях</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full" variant="outline">
                  <Icon name="Download" className="mr-2" size={18} />
                  Скачать PDF (3.1 МБ)
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h3 className="text-4xl font-heading font-bold text-center mb-4">Свяжитесь с нами</h3>
          <p className="text-center text-muted-foreground mb-12">
            Готовы обсудить партнерство или инвестиции? Напишите нам
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Контактная информация</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <Icon name="MapPin" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-medium">Адрес офиса</div>
                    <div className="text-sm text-muted-foreground">г. Москва, ул. Тверская, д. 12, офис 500</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Phone" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-medium">Телефон</div>
                    <div className="text-sm text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Mail" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm text-muted-foreground">invest@investtech.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Icon name="Clock" className="text-primary mt-1" size={24} />
                  <div>
                    <div className="font-medium">Режим работы</div>
                    <div className="text-sm text-muted-foreground">Пн-Пт: 9:00 - 18:00</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-heading">Форма обратной связи</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-secondary-foreground py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-heading font-bold text-lg mb-4">Grand Marina Resort</h4>
              <p className="text-sm text-secondary-foreground/80">
                Премиальный курортный отель 5 звезд
              </p>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Проект</h5>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('about')}>О проекте</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('portfolio')}>Визуализация</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('contact')}>Контакты</div>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Для инвесторов</h5>
              <div className="space-y-2 text-sm text-secondary-foreground/80">
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('financials')}>Финансы</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('presentation')}>Презентация</div>
                <div className="cursor-pointer hover:text-primary transition-colors" onClick={() => scrollToSection('presentation')}>Отчетность</div>
              </div>
            </div>
            <div>
              <h5 className="font-heading font-semibold mb-4">Следите за нами</h5>
              <div className="flex gap-4">
                <Icon name="Linkedin" className="cursor-pointer hover:text-primary transition-colors" size={24} />
                <Icon name="Twitter" className="cursor-pointer hover:text-primary transition-colors" size={24} />
                <Icon name="Facebook" className="cursor-pointer hover:text-primary transition-colors" size={24} />
              </div>
            </div>
          </div>
          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            © 2024 Grand Marina Resort. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;