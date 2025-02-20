import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';

export function PricingSection() {
  return (
    <section id="pricing" className="w-full bg-pw-bg-600 py-8 sm:py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold tracking-tighter text-pw-text-500 sm:text-3xl md:text-4xl lg:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mx-auto max-w-[700px] text-sm text-pw-text-600 sm:text-base md:text-xl">
              Select the perfect plan to elevate your writing journey with ProseWrite.
            </p>
          </div>
          <div className="w-full space-y-8">
            <div className="mx-auto grid max-w-sm gap-6 md:max-w-none md:grid-cols-2 lg:grid-cols-4">
              <Card className="flex min-h-[400px] flex-col border-pw-bg-700 bg-pw-bg-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-pw-text-500 sm:text-2xl">Basic</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-3xl font-bold text-pw-text-500 sm:text-4xl">
                      $10<span className="text-base font-normal sm:text-lg">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-pw-text-600">
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>3 hours of dictation per month</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Automatic editing & formatting</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Customizable editing personas</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>45+ Languages + dialects supported</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="relative flex min-h-[440px] flex-col border-pw-highlight bg-pw-bg-700">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-pw-highlight px-3 py-1 text-xs font-medium text-pw-bg-500">
                  Popular Choice
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-pw-text-500 sm:text-2xl">Standard</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-3xl font-bold text-pw-text-500 sm:text-4xl">
                      $40<span className="text-base font-normal sm:text-lg">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-pw-text-600">
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>15 hours of dictation per month</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>All Basic features included</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>3-month rollover of unused hours</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Genre-specific editing options</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 w-full bg-pw-highlight hover:bg-pw-highlight-600">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
              <Card className="flex min-h-[400px] flex-col border-pw-bg-700 bg-pw-bg-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-pw-text-500 sm:text-2xl">Premium</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-3xl font-bold text-pw-text-500 sm:text-4xl">
                      $100<span className="text-base font-normal sm:text-lg">/month</span>
                    </div>
                    <ul className="space-y-3 text-sm text-pw-text-600">
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>40 hours of dictation per month</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>All Standard features included</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Ideal for novels & large projects</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Lowest cost per hour</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="flex min-h-[400px] flex-col border-pw-bg-700 bg-pw-bg-700">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-pw-text-500 sm:text-2xl">A La Carte</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col space-y-6">
                    <div className="text-3xl font-bold text-pw-text-500 sm:text-4xl">
                      $3.50<span className="text-base font-normal sm:text-lg">/hour</span>
                    </div>
                    <ul className="space-y-3 text-sm text-pw-text-600">
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Buy extra hours anytime</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>No subscription required</span>
                      </li>
                      <li className="flex items-start gap-2 text-left">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-pw-highlight" />
                        <span>Hours never expire</span>
                      </li>
                    </ul>
                  </div>
                  <Button className="mt-6 w-full">Buy Hours</Button>
                </CardContent>
              </Card>
            </div>
            {/* <div className="mt-12 overflow-x-auto rounded-lg border border-pw-bg-700">
              <table className="w-full text-left text-sm text-pw-text-600">
                <thead className="bg-pw-bg-700 text-xs uppercase text-pw-text-600">
                  <tr>
                    <th className="px-6 py-3">Features</th>
                    <th className="px-6 py-3">A La Carte</th>
                    <th className="px-6 py-3">Basic</th>
                    <th className="px-6 py-3">Standard</th>
                    <th className="px-6 py-3">Premium</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-pw-bg-700">
                  <tr className="bg-pw-bg-600">
                    <td className="px-6 py-4 font-medium">Dictation Hours</td>
                    <td className="px-6 py-4">Pay per hour</td>
                    <td className="px-6 py-4">3 hours/month</td>
                    <td className="px-6 py-4">15 hours/month</td>
                    <td className="px-6 py-4">40 hours/month</td>
                  </tr>
                  <tr className="bg-pw-bg-700">
                    <td className="px-6 py-4 font-medium">Languages</td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                  </tr>
                  <tr className="bg-pw-bg-600">
                    <td className="px-6 py-4 font-medium">Hour Rollover</td>
                    <td className="px-6 py-4">Never expire</td>
                    <td className="px-6 py-4">3 months</td>
                    <td className="px-6 py-4">3 months</td>
                    <td className="px-6 py-4">3 months</td>
                  </tr>
                  <tr className="bg-pw-bg-700">
                    <td className="px-6 py-4 font-medium">Editing Personas</td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><Minus className="h-4 w-4 text-pw-text-600" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                  </tr>
                  <tr className="bg-pw-bg-600">
                    <td className="px-6 py-4 font-medium">Auto Punctuation</td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                  </tr>
                  <tr className="bg-pw-bg-700">
                    <td className="px-6 py-4 font-medium">Export Formats</td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                    <td className="px-6 py-4"><CheckCircle2 className="h-4 w-4 text-pw-highlight" /></td>
                  </tr>
                </tbody>
              </table>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
