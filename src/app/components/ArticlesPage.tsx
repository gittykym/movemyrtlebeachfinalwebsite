import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import dirtyPack from '../../imports/dirty_pack.jpg';

const articles = [
  {
    id: 1,
    title: '3 Simplest Ways to Save Money When Using a Local Moving Company',
    author: 'movemb',
    date: 'July 15, 2019',
    image: dirtyPack,
    imageAlt: 'Dirty and damaged moving boxes — a problem Move Myrtle Beach prevents',
    content: [
      { type: 'intro', text: 'Using an experienced moving company can make your move a lot easier, but costs can add up if you let them. As a moving company ourselves we can give you insight on how-to keep those costs down. The 3 simplest ways we know of to help with your local moving costs are:' },
      {
        type: 'list',
        items: [
          "Compare rates with local moving companies beforehand and ask what their rate includes, especially how many movers does their rate include.",
          "Prepare as much as possible before the movers arrive. Have your boxes packed, break down your own beds and put them up yourself in your new home, clean off the tops of all furniture being moved, remove mirrors, take pictures and tv's down.",
          "When the movers arrive at your new home be prepared to show them where everything goes. This is the number one waste of your money we have seen. If the mover doesn't know where the box goes he has to wait and find the customer each time and ask, because the last thing he wants to do is put it down where it doesn't belong and have to move it again when the customer realizes it later."
        ]
      },
      { type: 'outro', text: "These tips are simple enough to do and each thing you do will save time and with a moving company time is money. If you add up the time involved to do all these things you can save yourself a good amount of money." }
    ]
  }
];

export function ArticlesPage() {
  return (
    <>
      <Helmet>
        <title>Helpful Articles | Move Myrtle Beach</title>
        <meta name="description" content="Moving tips and advice from the pros at Move Myrtle Beach — Myrtle Beach's trusted local movers." />
      </Helmet>

      <div className="bg-[#00284A] text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="flex items-center gap-2 text-blue-300 hover:text-white transition mb-6 w-fit">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-3" style={{ fontFamily: 'Syne, sans-serif' }}>Helpful Articles</h1>
          <p className="text-blue-200 text-base md:text-lg">Moving tips and advice from the pros at Move Myrtle Beach.</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-10 md:py-16 space-y-12">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
            <ImageWithFallback src={article.image} alt={article.imageAlt} className="w-full h-56 md:h-72 object-cover" />
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1.5"><User className="w-4 h-4" />Posted by {article.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{article.date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#00284A] mb-6" style={{ fontFamily: 'Syne, sans-serif' }}>{article.title}</h2>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                {article.content.map((block, idx) => {
                  if (block.type === 'intro' || block.type === 'outro') return <p key={idx}>{block.text}</p>;
                  if (block.type === 'list' && block.items) return (
                    <ol key={idx} className="list-decimal list-outside ml-5 space-y-3">
                      {block.items.map((item, i) => <li key={i}>{item}</li>)}
                    </ol>
                  );
                  return null;
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
