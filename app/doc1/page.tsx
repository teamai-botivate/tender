import Link from 'next/link';

export default function Doc1Dashboard() {
  const documents = [
    {
      id: 'page1',
      title: 'Bid Documents on Letterhead',
      description: 'Covering Letter (Format-2), General Particulars (Format-1), Financial Eligibility, Work Experience, Declarations, and Technical Details.',
      color: 'bg-emerald-500',
      icon: '📄'
    },
    {
      id: 'page2',
      title: 'EMD Bank Guarantees',
      description: 'Annexure-K EMD/Bid Security Bank Guarantees — one per package, with the total EMD.',
      color: 'bg-blue-500',
      icon: '🏦'
    },
    {
      id: 'page3',
      title: 'Envelope Stickers',
      description: 'Outer Sealed Cover, Envelope-I, and Envelope-II cover stickers for physical bid submission.',
      color: 'bg-amber-500',
      icon: '🏷️'
    },
    {
      id: 'page4',
      title: 'Final Submission Checklist',
      description: 'Index and checklist for Envelope-I and Envelope-II containing all required documents.',
      color: 'bg-purple-500',
      icon: '✅'
    },
    {
      id: 'page5',
      title: 'Stamp Paper Documents',
      description: 'Notarised Format-5 (Power of Attorney), Annexure-D, Annexure-H, and Annexure-E (Indemnity Bond).',
      color: 'bg-rose-500',
      icon: '⚖️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-4">Bid Document Templates</h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Blank templates for ROTOMAG ENERTEC LIMITED&apos;s bid documents — every underlined blank fills in
            automatically once a real tender is created. Open a specific tender&apos;s filled documents from{' '}
            <a href="/tender-details" className="text-emerald-600 font-semibold hover:underline">
              Tender Details
            </a>
            .
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documents.map((doc) => (
            <Link 
              href={`/doc1/${doc.id}`} 
              key={doc.id}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full ${doc.color} opacity-5 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="text-5xl mb-6">{doc.icon}</div>
              <h2 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-emerald-600 transition-colors">
                {doc.title}
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-8">
                {doc.description}
              </p>
              
              <div className="flex items-center text-sm font-semibold text-emerald-600">
                View Document 
                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
