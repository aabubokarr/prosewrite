import * as React from 'react';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="w-full bg-pw-bg-700 py-12 md:py-24 lg:py-32">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 fill-pw-highlight text-pw-highlight" />
              ))}
            </div>
            <h2 className="text-3xl font-bold tracking-tighter text-pw-text-500 sm:text-4xl md:text-5xl">
              Trusted by Professional Writers
            </h2>
            <p className="mx-auto max-w-[700px] text-pw-text-600 md:text-xl">
              See how ProseWrite streamlines writing for authors, editors, and content creators.
            </p>
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="border-pw-bg-700 bg-pw-bg-600">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="/testimonials/kevin-j-anderson.png"
                    alt="Kevin J. Anderson"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-pw-text-500">Kevin J. Anderson</h3>
                  <p className="text-sm text-pw-text-600">
                    New York Times bestselling author of Star Wars: Jedi Search
                  </p>
                  <p className="text-pw-text-500">
                    &quot;I have been a writing &apos;dictator&apos; for my entire career, and
                    finally we have access to tools to make my transcription fast, accurate and
                    streamlined. ProseWrite is a remarkable new addition to that toolkit, to take
                    away the drudgery so that my time and effort is used to create stories!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pw-bg-700 bg-pw-bg-600">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="/testimonials/michael-la-ronn.jpg"
                    alt="Michael La Ronn"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-pw-text-500">Michael La Ronn</h3>
                  <p className="text-sm text-pw-text-600">
                    Prolific science fiction & fantasy writer and YouTuber
                  </p>
                  <p className="text-pw-text-500">
                    &quot;ProseWrite is the future of transcription, offering fast and accurate
                    transcriptions while also editing for typos. It eliminates the dreaded clean-up
                    problem that many &apos;dictators&apos; face. It has been a game-changer for my
                    writing, and it will turn the art of dictation into a science for a lot of
                    writers.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pw-bg-700 bg-pw-bg-600">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="/testimonials/jessica-gang.jpg"
                    alt="Jessica Gang"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-pw-text-500">Jessica Gang</h3>
                  <p className="text-sm text-pw-text-600">
                    Owner and editor at Silver Lining Edits
                  </p>
                  <p className="text-pw-text-500">
                    &quot;As a long-time editor, I am reluctant to recommend an editing software
                    which in theory could eliminate my job, but here I am. ProseWrite is different.
                    It&apos;s a dictation/editing tool that works in conjunction with your editor.
                    Nothing can replace a real-life editor but ProseWrite can help make sure what
                    you do send your editor is the best you have to offer.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-pw-bg-700 bg-pw-bg-600">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="relative h-16 w-16">
                  <Image
                    src="/testimonials/dale-l-roberts.jpg"
                    alt="Dale L. Roberts"
                    width={64}
                    height={64}
                    className="rounded-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-pw-text-500">Dale L. Roberts</h3>
                  <p className="text-sm text-pw-text-600">Award-Winning Author & Video Creator</p>
                  <p className="text-pw-text-500">
                    &quot;ProseWrite is a game-changer for voice dictation. No more struggling with
                    punctuation or learning new skills — just talk, and ProseWrite turns your
                    thoughts into polished text effortlessly. I even used it to transform my video
                    content into top-notch written posts with minimal editing. Honestly, the output
                    was better than what I said in the video!&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
