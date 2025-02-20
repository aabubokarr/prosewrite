import { Card, CardContent } from './ui/card';
import { Section, SectionHeader } from './ui/section';
import { Zap, Brain, Users, Lock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <Card className="group border-zinc-700 bg-pw-bg-600 transition-all duration-300 hover:border-pw-highlight hover:bg-pw-bg-700">
      <CardContent className="flex flex-col items-center space-y-4 p-4 sm:p-6">
        <div className="rounded-full bg-pw-highlight-200/10 p-3 text-pw-highlight transition-all duration-300 group-hover:bg-pw-highlight group-hover:text-pw-bg-500">
          <div className="flex h-8 w-8 items-center justify-center sm:h-10 sm:w-10">{icon}</div>
        </div>
        <h3 className="text-lg font-bold text-pw-text-500 sm:text-xl">{title}</h3>
        <p className="text-center text-sm text-pw-text-600">{description}</p>
        <ul className="mt-4 space-y-2 text-left text-sm text-pw-text-600">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-2">
              <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-pw-highlight" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}

export function UnleashSection() {
  const features = [
    {
      icon: <Zap className="h-full w-full" />,
      title: 'Lightning-fast Dictation & Translation',
      description:
        'Convert your spoken words into written text with unprecedented precision and speed.',
      benefits: [
        '90–95% transcription accuracy',
        '45+ languages and dialects',
        'Detects regional nuances',
        'Import existing files',
      ],
    },
    {
      icon: <Brain className="h-full w-full" />,
      title: 'Intelligent Editing Options',
      description:
        'ProseWrite highlights every edit it makes, allowing you to easily review changes.',
      benefits: [
        'Automatically ads grammar and punctuation',
        'Tracks changes for easy review',
        'Export in multiple formats',
        'Add custom words',
      ],
    },
    {
      icon: <Users className="h-full w-full" />,
      title: 'Customizable Editing Personas',
      description:
        'Choose an editing persona and tailor it to perfectly match your unique creative voice.',
      benefits: [
        '11 genre-specific editing personas',
        'Set default personas to save time',
        'Save project-level presets',
        'Enable NSFW content',
      ],
    },
    {
      icon: <Lock className="h-full w-full" />,
      title: 'Uncompromising Security',
      description:
        'Your work is protected with state-of-the-art encryption, ensuring your ideas remain yours and yours alone.',
      benefits: [
        'End-to-end encryption',
        'GDPR and CCPA compliant',
        'Regular security audits',
        'Automated backups',
      ],
    },
  ];

  return (
    <Section variant="dark">
      <div className="flex flex-col items-center justify-center space-y-12 text-center">
        <div className="space-y-4">
          <div className="inline-block rounded-full bg-pw-highlight-200/10 px-4 py-1.5">
            <span className="text-sm font-medium text-pw-highlight">
              Powered by Advanced AI Technology
            </span>
          </div>
          <SectionHeader
            title="Unleash Your Writing Potential"
            description="ProseWrite empowers you to write smarter and faster with powerful, user-friendly features and functionality."
          />
        </div>

        <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 rounded-lg border border-pw-bg-700 bg-pw-bg-600/50 p-6 text-center">
          <div>
            <div className="text-3xl font-bold text-pw-text-500">95%</div>
            <div className="text-sm text-pw-text-600">Accuracy Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pw-text-500">45+</div>
            <div className="text-sm text-pw-text-600">Languages + Dialects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pw-text-500">11</div>
            <div className="text-sm text-pw-text-600">Customizable Personas</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-pw-text-500">10,071+</div>
            <div className="text-sm text-pw-text-600">Minutes Logged</div>
          </div>
        </div>

        <Button className="bg-pw-highlight hover:bg-pw-highlight-600" size="lg">
          Start Writing Smarter
        </Button>
      </div>
    </Section>
  );
}
