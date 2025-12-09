import React, { useState } from 'react';
import { SlideContainer, SlideTitle, BulletPoint, Card, Button } from './UI';
import { 
  BookOpen, Calculator, BarChart3, TrendingUp, Users, Target, 
  School, CheckCircle, Brain, Calendar, FileText, Award, Layers 
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, AreaChart, Area 
} from 'recharts';

/* --- Slide 1: Intro --- */
export const SlideIntro: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-brand-900 to-brand-800 text-white p-8">
    <div className="mb-8 p-6 bg-white/10 rounded-full backdrop-blur-sm">
      <Target size={80} className="text-brand-100" />
    </div>
    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Singular no SAEB</h1>
    <p className="text-xl md:text-2xl text-brand-100 max-w-3xl leading-relaxed mb-12">
      Um desenvolvimento e aperfeiçoamento único para os alunos do 
      5º e 9º ano do Fundamental e 3º ano do Ensino Médio.
    </p>
    <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md max-w-2xl">
      <p className="font-medium text-lg">O SAEB é uma das bases de avaliação do IDEB – Índice de Desenvolvimento da Educação Básica</p>
    </div>
  </div>
);

/* --- Slide 2 & 3: Tracks (Reusable) --- */
interface TrackSlideProps {
  subject: 'Matemática' | 'Língua Portuguesa';
  tracks: string[];
  color: string;
}

export const SlideTrack: React.FC<TrackSlideProps> = ({ subject, tracks, color }) => (
  <SlideContainer>
    <div className="flex items-center gap-4 mb-6">
      {subject === 'Matemática' ? <Calculator size={40} className="text-brand-600" /> : <BookOpen size={40} className="text-brand-600" />}
      <SlideTitle>Trilha SAEB {subject}</SlideTitle>
    </div>

    <div className="grid md:grid-cols-2 gap-12 h-full">
      <div className="space-y-6">
        <Card title="Metodologia TRI" icon={<Brain size={24} />}>
          <p className="mb-4">Como a disciplina pode fazer parte do dia a dia e ser desenvolvida com planejamento e dados precisos?</p>
          <ul className="space-y-3">
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> <strong>Duração:</strong> 30 dias por trilha</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> <strong>Prática:</strong> 10 rodadas de Prática Deliberada</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> <strong>Meta:</strong> Evolução de 20% a 100%</li>
            <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500"/> <strong>Conclusão:</strong> Teto de 70-100% de acertos</li>
          </ul>
        </Card>
      </div>
      <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 overflow-y-auto">
        <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
          <Layers className="text-brand-600" /> Temas das Trilhas
        </h3>
        <ul className="space-y-4">
          {tracks.map((track, idx) => (
            <li key={idx} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-brand-500 flex justify-between items-center">
              <span className="font-medium text-slate-700">{track}</span>
              <span className="text-xs font-bold text-brand-500 bg-brand-50 px-2 py-1 rounded">TRILHA {idx + 1}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </SlideContainer>
);

/* --- Slide 4: Benefits --- */
export const SlideMunicipality: React.FC = () => (
  <SlideContainer>
    <SlideTitle>O que o Município recebe</SlideTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card title="Relatórios Individuais" icon={<FileText />}>
        <p className="mb-2">Desempenho e evolução do aluno em Matemática e Língua Portuguesa.</p>
        <div className="flex gap-2 mt-4">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">6 Trilhas</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">6 Relatórios</span>
        </div>
      </Card>
      <Card title="Diagnóstico Escolar" icon={<School />}>
        <p>Identificação de lacunas de aprendizado e fragilidades no ensino.</p>
        <p className="mt-2 text-sm text-slate-500 italic">Relatórios de ações necessárias POR ESCOLA.</p>
      </Card>
      <Card title="Apoio Docente" icon={<BookOpen />}>
        <p>Manual de Aprofundamento Teórico e de Ensino aos professores com sugestões específicas por escola.</p>
      </Card>
      <Card title="Rankeamento" icon={<Award />}>
        <p>Classificação das escolas municipais em cada uma das TRILHAS para incentivo e monitoramento.</p>
      </Card>
    </div>
  </SlideContainer>
);

/* --- Slide 5: Data --- */
export const SlideDataUsage: React.FC = () => (
  <SlideContainer>
    <SlideTitle>Nossos dados permitem</SlideTitle>
    <div className="grid gap-6">
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border-l-8 border-red-500">
            <div className="bg-red-100 p-3 rounded-full text-red-600"><TrendingUp /></div>
            <div>
                <h3 className="text-xl font-bold mb-2">Identificar Dificuldades</h3>
                <p className="text-slate-600">Agrupar escolas em treinamentos estratégicos de acordo com as Trilhas de maior fragilidade.</p>
            </div>
        </div>
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border-l-8 border-yellow-500">
            <div className="bg-yellow-100 p-3 rounded-full text-yellow-600"><Target /></div>
            <div>
                <h3 className="text-xl font-bold mb-2">Propor Soluções</h3>
                <p className="text-slate-600">Soluções metrificadas e com direcionamento a partir dos dados concretos.</p>
            </div>
        </div>
        <div className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-md border-l-8 border-green-500">
            <div className="bg-green-100 p-3 rounded-full text-green-600"><BookOpen /></div>
            <div>
                <h3 className="text-xl font-bold mb-2">Entregar Materiais</h3>
                <p className="text-slate-600">Sugerir treinamento docente e materiais nas Trilhas de maior dificuldade em cada escola.</p>
            </div>
        </div>
    </div>
  </SlideContainer>
);

/* --- Slide 6: Monitoring --- */
export const SlideMonitoring: React.FC = () => (
  <SlideContainer>
    <SlideTitle>Acompanhamento e Evolução</SlideTitle>
    <div className="relative border-l-4 border-brand-200 ml-6 pl-8 space-y-12 my-8">
        <div className="relative">
            <div className="absolute -left-[46px] bg-brand-500 rounded-full p-2 text-white"><Calendar size={20}/></div>
            <h3 className="text-xl font-bold text-brand-900">Mensalmente</h3>
            <p className="text-slate-600">Análise dos dados por Trilhas (relatórios e reuniões a cada 30 dias).</p>
        </div>
        <div className="relative">
            <div className="absolute -left-[46px] bg-brand-500 rounded-full p-2 text-white"><FileText size={20}/></div>
            <h3 className="text-xl font-bold text-brand-900">1º Semestre (Junho) - Simulado 1</h3>
            <p className="text-slate-600">Avaliação do desenvolvimento nas Trilhas 1 a 3.</p>
        </div>
        <div className="relative">
            <div className="absolute -left-[46px] bg-brand-500 rounded-full p-2 text-white"><FileText size={20}/></div>
            <h3 className="text-xl font-bold text-brand-900">2º Semestre (Outubro) - Simulado 2</h3>
            <p className="text-slate-600">Avaliação do desenvolvimento nas Trilhas 4 a 6.</p>
        </div>
        <div className="relative">
             <div className="absolute -left-[46px] bg-brand-500 rounded-full p-2 text-white"><Users size={20}/></div>
            <h3 className="text-xl font-bold text-brand-900">Comparativo</h3>
            <p className="text-slate-600">Dados para comparação do município com amostragem de outros municípios.</p>
        </div>
    </div>
  </SlideContainer>
);

/* --- Slide 7: TRI Model (Chart) --- */
const triData = [
  { ability: -3, prob: 0 },
  { ability: -2, prob: 0.05 },
  { ability: -1, prob: 0.2 },
  { ability: 0, prob: 0.5 },
  { ability: 1, prob: 0.8 },
  { ability: 2, prob: 0.95 },
  { ability: 3, prob: 1 },
];

export const SlideTriModel: React.FC = () => (
  <SlideContainer>
    <SlideTitle>Modelo TRI: Teoria de Resposta ao Item</SlideTitle>
    <div className="grid md:grid-cols-2 gap-8 h-full">
        <div className="flex flex-col justify-center">
            <p className="text-lg text-slate-700 mb-6">
                Na metodologia Singular, não avaliamos apenas se o aluno "acertou" ou "errou". 
                Utilizamos a curva característica do item para entender a proficiência real.
            </p>
            <div className="bg-brand-50 p-6 rounded-lg border border-brand-100">
                <h4 className="font-bold text-brand-800 mb-2">Exemplo Matemático:</h4>
                <p className="text-sm text-slate-600">
                    Um aluno com proficiência nível 1.0 tem 80% de chance de acertar este item. 
                    Isso nos permite calibrar as trilhas exatamente para o nível da turma.
                </p>
            </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-lg h-[400px]">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={triData}>
                    <defs>
                        <linearGradient id="colorProb" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ability" label={{ value: 'Habilidade do Aluno', position: 'insideBottom', offset: -5 }} />
                    <YAxis label={{ value: 'Probabilidade de Acerto', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Area type="monotone" dataKey="prob" stroke="#0284c7" fillOpacity={1} fill="url(#colorProb)" />
                </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-xs text-slate-500 mt-2">Curva Característica do Item (Simulação Visual)</p>
        </div>
    </div>
  </SlideContainer>
);

/* --- Slide 8: Deliberate Practice (Interactive) --- */
export const SlidePracticeModel: React.FC = () => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <SlideContainer>
      <SlideTitle>Modelo de Prática Deliberada</SlideTitle>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
            <h3 className="text-2xl font-bold text-slate-800 mb-4">O que é?</h3>
            <p className="text-lg text-slate-700 mb-6">
                Não é apenas repetição. É repetição com <strong>feedback imediato</strong> e foco na melhoria de um aspecto específico (Micro-habilidade).
            </p>
            <ul className="space-y-3">
                <BulletPoint>Foco intenso</BulletPoint>
                <BulletPoint>Feedback instantâneo</BulletPoint>
                <BulletPoint>Correção de erro em tempo real</BulletPoint>
            </ul>
        </div>
        
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
            <div className="bg-brand-600 text-white p-4 font-bold flex justify-between">
                <span>Trilha 3: Geometria</span>
                <span>Rodada 4/10</span>
            </div>
            <div className="p-8">
                <p className="text-slate-800 text-lg font-medium mb-6">
                    Qual é a medida da área de um quadrado cujo lado mede 5cm?
                </p>
                
                {!showSolution ? (
                    <div className="space-y-3">
                        {['10 cm²', '20 cm²', '25 cm²', '15 cm²'].map((opt, i) => (
                            <button 
                                key={i}
                                onClick={() => setShowSolution(true)}
                                className="w-full text-left p-3 rounded border border-slate-300 hover:bg-brand-50 hover:border-brand-300 transition-colors"
                            >
                                {opt}
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="animate-fadeIn">
                         <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg mb-4">
                            <strong>Correto! (25 cm²)</strong>
                         </div>
                         <p className="text-slate-600 text-sm">
                            <strong>Feedback:</strong> A área do quadrado é calculada multiplicando lado x lado (L²).<br/>
                            5cm x 5cm = 25cm².
                         </p>
                         <Button variant="secondary" className="mt-4 w-full" onClick={() => setShowSolution(false)}>Próxima Questão</Button>
                    </div>
                )}
            </div>
        </div>
      </div>
    </SlideContainer>
  );
};

/* --- Slide 9: Results (Charts) --- */
const proficiencyData = [
  { name: 'Jan', value: 45 },
  { name: 'Mar', value: 55 },
  { name: 'Mai', value: 68 },
  { name: 'Ago', value: 75 },
  { name: 'Out', value: 88 },
];

const schoolData = [
  { name: 'Escola A', evolution: 80, difficulty: 20 },
  { name: 'Escola B', evolution: 45, difficulty: 55 },
  { name: 'Escola C', evolution: 90, difficulty: 10 },
  { name: 'Escola D', evolution: 30, difficulty: 70 },
];

export const SlideResults: React.FC = () => (
  <SlideContainer>
    <SlideTitle>Resultados e Ações</SlideTitle>
    <div className="grid md:grid-cols-2 gap-8 h-full pb-8">
        <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-4 text-center">Evolução da Proficiência Geral</h3>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={proficiencyData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#0ea5e9" strokeWidth={3} dot={{r: 6}} />
                </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 text-blue-800 text-sm rounded">
                <strong>Ação:</strong> Aplicar Prática Deliberada nos alunos com estagnação.
            </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
            <h3 className="text-lg font-bold mb-4 text-center">Distribuição por Escola (Evolução vs Dificuldade)</h3>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={schoolData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" horizontal={false}/>
                    <XAxis type="number" domain={[0, 100]} hide />
                    <YAxis dataKey="name" type="category" width={80} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="evolution" name="Evolução %" stackId="a" fill="#0ea5e9" radius={[0, 4, 4, 0]} />
                </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-red-50 text-red-800 text-sm rounded">
                <strong>Ação:</strong> Treinamento específico para Escolas B e D (alta dificuldade).
            </div>
        </div>
    </div>
  </SlideContainer>
);

/* --- Slide 10: Managers --- */
export const SlideManagers: React.FC = () => (
  <SlideContainer>
    <SlideTitle>O Papel dos Gestores</SlideTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
            "Mapear habilidades críticas (leitura inferencial, geometria, etc.)",
            "Identificar escolas com baixo desempenho para ações específicas.",
            "Elaborar planos de intervenção para redes e escolas.",
            "Reorganizar a formação continuada com foco nas fragilidades.",
            "Relacionar infraestrutura, perfil docente e desempenho.",
            "Direcionar recursos e apoio técnico a escolas vulneráveis.",
            "Articular políticas de alfabetização, letramento e matemática.",
            "Apresentar resultados para comunidade escolar e conselho.",
            "Envolver famílias e professores no processo de melhoria."
        ].map((item, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg shadow-sm border border-slate-100 hover:border-brand-300 transition-colors">
                <p className="text-sm text-slate-700 font-medium">{item}</p>
            </div>
        ))}
    </div>
  </SlideContainer>
);

/* --- Slide 11 & 12: Closing --- */
export const SlideClosing: React.FC = () => (
  <div className="h-full flex flex-col items-center justify-center text-center bg-brand-50">
    <SlideTitle>Implementação</SlideTitle>
    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl">
        <h3 className="text-2xl font-bold mb-6 text-brand-900">Equipe de Gestão Singular</h3>
        <p className="text-slate-600 text-lg mb-8">
            Estamos prontos para transformar a educação do seu município através de dados, 
            tecnologia e metodologia comprovada.
        </p>
        <Button onClick={() => window.location.reload()}>Reiniciar Apresentação</Button>
    </div>
  </div>
);
