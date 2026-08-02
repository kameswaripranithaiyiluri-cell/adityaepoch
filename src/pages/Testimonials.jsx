export default function Testimonials() {
  // YOUTUBE VIDEO DATA - Using embed URLs for reliable video playback
  // To add videos: 
  // 1. Get the YouTube video ID from the URL
  // 2. Add an object to this array with the videoId
  
  // You can place local MP4 files in `public/videos` (recommended) and reference them
  // using the `localSrc` property below. If `localSrc` is not provided, the component
  // will fall back to embedding a YouTube video via `videoId`.
  const videos = [
    {
      // Local file example (served from public/videos)
      localSrc: '/videos/father-proud-moment.mp4',
      title: 'Father Proud Moment - BSc AI',
      category: 'Parent Testimonial',
      student: 'G. Divya Priya — BSc AI',
      description: 'A proud father celebrates his daughter G. Divya Priya from the BSc AI group and shares his happiness over her academic success.',
      message: 'My daughter G. Divya Priya is studying BSc AI and I am very happy with her achievement.',
    },
    {
      // Local file example (served from public/videos)
      localSrc: '/videos/mother-proud-moment.mp4',
      title: 'Mother Proud Moment - BSc Data Science',
      category: 'Parent Testimonial',
      student: 'Jahnavi — BSc Data Science',
      description: 'A proud mother shares her joy as Jahnavi begins the BSc Data Science group and celebrates this important milestone.',
      message: 'Jahnavi has joined BSc Data Science and our family is very proud of her.',
    },
  ];

  return (
    <>
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        </div>
        
        <div className="relative text-center max-w-4xl z-10">
          <div className="inline-block mb-6">
            <span className="text-sm font-bold uppercase tracking-widest bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full border border-cyan-400/30">
              Success Stories
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Parent</span>{' '}
            <span className="bg-gradient-to-r from-amber-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">Proud Moments</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 dark:text-gray-300 max-w-2xl mx-auto">
            Watch real local videos of parents celebrating their child's placement and graduation from Aditya Epoch.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-slate-100 dark:bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-400 mb-16">Parent Testimonials</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <div key={i} className="bg-white dark:bg-gray-950 rounded-3xl overflow-hidden hover:shadow-lg transition duration-500 border border-slate-200/60 dark:border-cyan-500/20">
                <div className="relative w-full bg-black rounded-t-3xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  {video.localSrc ? (
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      src={video.localSrc}
                      controls
                      playsInline
                      preload="metadata"
                      controlsList="nodownload"
                    />
                  ) : (
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      {video.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">{video.title}</h3>
                  <p className="text-slate-600 dark:text-gray-400 mb-2 font-semibold">{video.student}</p>
                  {video.description && <p className="text-slate-700 dark:text-gray-300 mb-3">{video.description}</p>}
                  {video.company && <p className="text-slate-500 dark:text-gray-500 text-sm mb-2">Placed at: <span className="font-bold text-cyan-400">{video.company}</span></p>}
                  {video.message && <p className="text-slate-600 dark:text-gray-400 italic">"{video.message}"</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-cyan-400 mb-8">Share Your Story</h2>
              <p className="text-slate-700 dark:text-gray-300 mb-6 leading-8">
                Have an inspiring student success story or a proud parent moment? We'd love to feature your video on our website!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-slate-100 dark:bg-gray-950 p-6 rounded-2xl border border-slate-200/60 dark:border-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Step 1: Record Your Video</h3>
                  <p className="text-slate-600 dark:text-gray-400">Record your video using phone, camera or screen recording (MP4 format recommended)</p>
                </div>

                <div className="bg-slate-100 dark:bg-gray-950 p-6 rounded-2xl border border-slate-200/60 dark:border-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Step 2: Send the Video File</h3>
                  <p className="text-slate-600 dark:text-gray-400">Send your video file via email or WhatsApp with title and student/parent name</p>
                </div>

                <div className="bg-slate-100 dark:bg-gray-950 p-6 rounded-2xl border border-slate-200/60 dark:border-cyan-500/20">
                  <h3 className="text-xl font-bold text-cyan-400 mb-2">Step 3: We'll Upload It</h3>
                  <p className="text-slate-600 dark:text-gray-400">We will add your video to our website and showcase your story!</p>
                </div>
              </div>

              <a
                href="mailto:admissions@adityacollege.edu.in?subject=Student Video Submission - Share My Story"
                className="inline-block bg-cyan-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
              >
                Send Video to College
              </a>
            </div>

            <div className="bg-slate-100 dark:bg-gray-950 p-8 rounded-3xl border border-slate-200/60 dark:border-cyan-500/20">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Video Guidelines</h3>
              <ul className="space-y-3 text-slate-600 dark:text-gray-400">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Video format: MP4, WebM, or MOV</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Duration: 30 seconds to 3 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Clear audio and good video quality (720p or higher)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Student/Parent testimonials or success stories</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Placement stories, campus life, achievements</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Family-friendly content only</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 font-bold">✓</span>
                  <span>Include student name and company/achievement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}