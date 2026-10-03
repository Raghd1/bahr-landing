import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export const resources = {
  en: {
    translation: {
      nav: {
        agency: 'The agency',
        expertise: 'Expertise',
        work: 'Our work',
        contact: 'Contact',
        letsTalk: "Let's talk",
        langToggle: 'العربية',
        langAria: 'Switch to Arabic',
        mobileDrawerTitle: 'Navigation',
        mobileConversationCTA: 'Start a conversation',
        mobileLocation: 'Jeddah, Saudi Arabia · dive@b7r.agency',
      },
      splash: {
        skip: 'Skip',
        skipAria: 'Skip intro animation',
        subtext: 'Click anywhere or press Esc to skip',
        dialogAria: 'Bahr intro splash screen',
      },
      hero: {
        eyebrow: 'Independent Digital Agency · Jeddah, Saudi Arabia',
        headlineLine1: 'A deeper',
        headlineLine2: 'creative approach.',
        statement: 'Design with depth. Technology with purpose.',
        description:
          'We are <strong class="hero-bahr-bold">Bahr</strong>. A Jeddah-born digital agency with a wider perspective. We build websites, mobile apps, and practical AI systems for ambitious teams across Saudi Arabia and the Gulf.',
        primaryCTA: 'Explore our expertise',
        emailCTA: 'dive@b7r.agency',
        quickOverviewLabel: 'Quick overview:',
        prompt1: 'What kind of work does Bahr do?',
        prompt2: 'How do we approach AI?',
        prompt3: 'Selected case studies',
        card1Badge: '2025',
        card1Category: '01 / Legal Tech',
        card1Title: 'Alageely',
        card1Copy:
          'Legal consultancy platform engineered for speed, authority, and clarity.',
        card2Badge: '2025',
        card2Category: '02 / Healthcare',
        card2Title: 'Riyadh Retina',
        card2Copy:
          'Patient-centered specialist healthcare platform with seamless digital access.',
        card3Badge: '2026',
        card3Category: '03 / AI & Automation',
        card3Title: 'AI Agents & Workflows',
        card3Copy:
          'Connected autonomous pipelines removing repetitive operations.',
        scrollLink: 'Scroll to explore',
      },
      about: {
        sectionIndex: '01 / The agency',
        sectionSubtitle: 'Beyond the surface',
        headlinePart1: 'Design with depth.',
        headlinePart2: 'Technology with purpose.',
        pullquote:
          'We are Bahr. A Jeddah-born digital agency with a wider perspective.',
        cta: 'Explore our expertise',
        paragraph1:
          'Good work starts below the surface. We get to know your business, then bring design and engineering together to make something that moves it forward.',
        paragraph2:
          'From a first idea to a fully working product, we build websites, mobile apps, and AI systems for ambitious teams across Saudi Arabia and the Gulf.',
        credibilityTag: 'Credibility',
        credibilityTitle: 'In good company',
        clients: {
          alageely: 'Legal consultancy',
          riyadhRetina: 'Specialist healthcare',
          sycleague: 'Sports technology',
          qvs: 'Enterprise verification',
          parkinly: 'Smart mobility',
          secureSteps: 'Cybersecurity',
          mass: 'Trading & logistics',
          lineup: 'Live entertainment',
        },
      },
      services: {
        sectionIndex: '02 / Our expertise',
        sectionSubtitle: 'From idea to impact',
        titleLine1: 'Built to work.',
        titleLine2: 'Made to feel different.',
        subtitle:
          'You’re navigating technical complexity and high expectations. We’ve been here before.',
        challengeLabel: 'The Challenge',
        solutionLabel: 'How We Solve It',
        capabilitiesLabel: 'Capabilities',
        item1: {
          number: '01',
          title: 'Web experiences',
          problemQuote:
            '“Our web presence feels outdated, slow, and disconnected from our actual product capability.”',
          solution:
            'Distinctive websites and capable platforms, designed around your audience and engineered for speed, search, and growth.',
          capabilities: [
            'Web design & UI craft',
            'Modern frontend (React / Vite)',
            'WebGL & subtle 3D interactions',
            'Headless CMS & architecture',
            'High-speed SEO & Core Web Vitals',
          ],
          ctaText: 'Discuss a web project',
        },
        item2: {
          number: '02',
          title: 'AI & automation',
          problemQuote:
            '“Leadership wants AI adopted, but nobody has practical workflows—just hype and manual workarounds.”',
          solution:
            'Practical AI agents and connected workflows that take repetitive work off your team’s hands.',
          capabilities: [
            'Autonomous AI agents',
            'Connected workflow automation',
            'Multi-system API integrations',
            'LLM knowledge retrieval (RAG)',
            'Internal operations tooling',
          ],
          ctaText: 'Explore AI & automation',
        },
        item3: {
          number: '03',
          title: 'Mobile apps',
          problemQuote:
            '“We need a cohesive iOS and Android product that users love, without the headache of managing fragmented teams.”',
          solution:
            'Thoughtful iOS and Android experiences, from defining the product to launching it in the app stores.',
          capabilities: [
            'iOS & Android native feel',
            'Cross-platform React Native',
            'Design systems & UI kits',
            'User journey architecture',
            'App Store release & ongoing scale',
          ],
          ctaText: 'Build a mobile app',
        },
      },
      work: {
        sectionIndex: '03 / Selected work',
        sectionSubtitle: 'Explore the details ↘',
        titleLine1: 'We solve the problems',
        titleLine2: 'worth solving.',
        description:
          'We don’t start with the interface. We start with the people using it—their constraints, their workflows, and what actually moves their business forward.',
        project1: {
          client: 'Alageely',
          industry: 'Legal consultancy',
          year: '2025',
          title:
            'A distinguished corporate law firm needed an authoritative digital platform that reflects decades of counsel across Saudi Arabia.',
          description:
            'Designed around executive clients, engineered for extreme performance, bilingual Arabic/English typography, and seamless consultation workflows.',
          tags: ['Web Experience', 'Bilingual UI/UX', 'Next.js / Vite', 'Headless CMS'],
          badge: 'Corporate Counsel',
        },
        project2: {
          client: 'Riyadh Retina',
          industry: 'Specialist healthcare',
          year: '2025',
          title:
            'Specialist eye care information can change lives—only if patients can find and navigate it effortlessly. Bahr made sure they could.',
          description:
            'A clinical web platform engineered for rapid patient triage, doctor credential verification, and high-trust booking journeys in the capital.',
          tags: ['Specialist Healthcare', 'Patient Journey', 'Core Web Vitals', 'Accessibility'],
          statNumber: '99.8%',
          statLabel: 'Triage Speed',
        },
        project3: {
          client: 'Sycleague',
          industry: 'Sports technology',
          year: '2025',
          title:
            'Live sports tournaments run on fast-moving data. Sycleague needed real-time telemetry and rankings that never lag under peak traffic.',
          description:
            'Built an interactive sports management and telemetry platform delivering live leaderboards, athlete profiles, and automated race heats.',
          tags: ['Real-Time Platform', 'Telemetry Dashboard', 'Sports Tech', 'API Architecture'],
          badge: 'LIVE TELEMETRY',
        },
        project4: {
          client: 'Lineup',
          industry: 'Live entertainment',
          year: '2026',
          title:
            'Saudi Arabia’s entertainment calendar moves at unprecedented speed. Lineup puts attendees in control of live festival schedules.',
          description:
            'High-concurrency platform handling festival discovery, instant stage notifications, artist lineups, and high-volume ticket routing.',
          tags: ['Live Entertainment', 'Mobile-First Platform', 'Real-Time Sync', 'Cloud Scale'],
          badge: 'STAGE A · 2026',
        },
        inquireCTA: 'Inquire about our projects',
        archiveCTA: 'Request complete portfolio archive',
      },
      perspectives: {
        sectionIndex: 'Perspectives & Craft',
        sectionSubtitle: 'Mixtape / Thinking',
        titleLine1: 'What we’re thinking',
        titleLine2: 'about right now.',
        linkedinLink: 'Follow our thinking on LinkedIn',
        exploreAction: 'Explore perspective',
        card1: {
          tag: 'AI Strategy',
          author: 'Bahar Engineering',
          title:
            'Most companies don’t need an LLM wrapper. They need autonomous agents wired into their operational data.',
          blurb:
            'Why deterministic API orchestration and connected tool use deliver tangible business ROI, while generic conversational chatbots fade.',
        },
        card2: {
          tag: 'Web Performance',
          author: 'Bahar Studio',
          title:
            'Speed is a design feature: Sub-second load times win high-value enterprise contracts in the Gulf.',
          blurb:
            'How stripping away framework bloat and optimizing Core Web Vitals directly boosts user confidence and transaction conversion.',
        },
        card3: {
          tag: 'Vision 2030',
          author: 'Bahar Leadership',
          title:
            'The regional shift from offshore staffing to high-craft engineering partners across Saudi Arabia.',
          blurb:
            'Ambitious teams are moving away from bloated management layers toward nimble partners who share their timezone and standards.',
        },
        card4: {
          tag: 'Design Systems',
          author: 'Bahar Systems',
          title:
            'Design systems aren’t just for designers. They’re the foundation that AI agents write code from.',
          blurb:
            'Creating strict design tokens and typed component contracts that keep design, engineering, and AI tools perfectly synchronized.',
        },
      },
      contact: {
        sectionIndex: '04 / Your next chapter',
        sectionSubtitle: 'Starts with a conversation',
        titleLine1: 'Let’s dive deeper.',
        titleLine2: 'We’re listening.',
        description: 'Tell us where you want to go. We’ll build the way there.',
        subtext:
          'Whether you are redesigning an enterprise platform, launching an ambitious mobile product, or deploying autonomous AI agents to eliminate manual operations—we partner with teams who value craft and clarity.',
        primaryBtn: 'Start a project with us',
        emailAria: 'Email Bahar Agency directly at dive@b7r.agency',
        location: 'Jeddah, Saudi Arabia · Working across the region. Thinking beyond it.',
      },
      footer: {
        tagline: 'Jeddah, Saudi Arabia \nWorking across the region. Thinking beyond it.',
        missionBadge: 'Made of depth.',
        exploreTitle: 'Explore',
        homeLink: 'Home',
        agencyLink: 'The agency',
        expertiseLink: 'Expertise',
        workLink: 'Selected work',
        contactLink: 'Contact',
        capabilitiesTitle: 'Capabilities',
        webExpLink: 'Web experiences',
        aiAutoLink: 'AI & automation',
        mobileAppsLink: 'Mobile apps',
        designSystemsLink: 'Design systems',
        startProjectTitle: 'Start a project',
        inquiryCopy: 'Looking to build high-craft websites, apps, or AI systems?',
        responseTime: 'Typically responds within 24 hours',
        copyright: '© {{year}} Bahr Agency. All rights reserved.',
        backToTop: 'Back to top',
      },
    },
  },
  ar: {
    translation: {
      nav: {
        agency: 'عن الوكالة',
        expertise: 'الخبرات',
        work: 'أعمالنا',
        contact: 'تواصل معنا',
        letsTalk: 'لنبدأ الحوار',
        langToggle: 'English',
        langAria: 'التغيير إلى الإنجليزية',
        mobileDrawerTitle: 'التنقل',
        mobileConversationCTA: 'ابدأ محادثة معنا',
        mobileLocation: 'جدة، المملكة العربية السعودية · dive@b7r.agency',
      },
      splash: {
        skip: 'تخطي',
        skipAria: 'تخطي مقدمة الموقع',
        subtext: 'انقر في أي مكان أو اضغط Esc للتخطي',
        dialogAria: 'شاشة مقدمة بحر',
      },
      hero: {
        eyebrow: 'وكالة رقمية مستقلة · جدة، المملكة العربية السعودية',
        headlineLine1: 'نهج إبداعي',
        headlineLine2: 'أكثر عمقاً.',
        statement: 'تصميم ذو عمق. وتقنية ذات هدف.',
        description:
          'نحن <strong class="hero-bahr-bold">بحر</strong>. وكالة رقمية انطلقت من جدة بأفق أوسع. نبني مواقع إلكترونية، وتطبيقات جوال، وأنظمة ذكاء اصطناعي عملية لفرق طموحة في المملكة والخليج.',
        primaryCTA: 'استكشف خبراتنا',
        emailCTA: 'dive@b7r.agency',
        quickOverviewLabel: 'نظرة سريعة:',
        prompt1: 'ما نوع الأعمال التي تنفذها بحر؟',
        prompt2: 'كيف نتعامل مع الذكاء الاصطناعي؟',
        prompt3: 'دراسات حالة مختارة',
        card1Badge: '٢٠٢٥',
        card1Category: '٠١ / التقنية القانونية',
        card1Title: 'العقيلي',
        card1Copy:
          'منصة استشارات قانونية مصممة للسرعة والمصداقية والوضوح.',
        card2Badge: '٢٠٢٥',
        card2Category: '٠٢ / الرعاية الصحية',
        card2Title: 'شبكية الرياض',
        card2Copy:
          'منصة رعاية صحية متخصصة تركز على تجربة المريض وتوفر وصولاً رقمياً سهلاً.',
        card3Badge: '٢٠٢٦',
        card3Category: '٠٣ / الذكاء الاصطناعي والأتمتة',
        card3Title: 'وكلاء الذكاء الاصطناعي والأتمتة',
        card3Copy:
          'مسارات عمل ذاتية متصلة تزيل العمليات الروتينية المتكررة.',
        scrollLink: 'انتقل للأسفل للاستكشاف',
      },
      about: {
        sectionIndex: '٠١ / عن الوكالة',
        sectionSubtitle: 'ما وراء السطح',
        headlinePart1: 'تصميم ذو عمق.',
        headlinePart2: 'تقنية ذات هدف.',
        pullquote:
          'نحن بحر. وكالة رقمية انطلقت من جدة، وننظر إلى التحديات بأفق أوسع.',
        cta: 'استكشف خبراتنا',
        paragraph1:
          'العمل الاستثنائي يبدأ من الأعماق. نتعمق في فهم نموذج عملك، ثم ندمج بين التصميم المتقن والهندسة البرمجية لنبني ما يدفع أعمالك للأمام.',
        paragraph2:
          'من الفكرة الأولى وحتى إطلاق المنتج بالكامل، نبني مواقع ويب، وتطبيقات جوال، وأنظمة ذكاء اصطناعي عملية لفرق طموحة في المملكة والخليج.',
        credibilityTag: 'المصداقية',
        credibilityTitle: 'شركاء النجاح',
        clients: {
          alageely: 'استشارات قانونية',
          riyadhRetina: 'رعاية صحية متخصصة',
          sycleague: 'تقنية رياضية',
          qvs: 'التحقق المؤسسي',
          parkinly: 'تنقل ذكي',
          secureSteps: 'أمن سيبراني',
          mass: 'تجارة ولوجستيات',
          lineup: 'فعاليات وترفيه حي',
        },
      },
      services: {
        sectionIndex: '٠٢ / خبراتنا',
        sectionSubtitle: 'من الفكرة إلى الأثر',
        titleLine1: 'صُممت لتعمل بكفاءة.',
        titleLine2: 'وصُنعت لتترك أثراً مختلفاً.',
        subtitle:
          'تتعامل مع تعقيدات تقنية وتطلعات عالية. لقد خضنا هذه التحديات من قبل.',
        challengeLabel: 'التحدي',
        solutionLabel: 'كيف نحله',
        capabilitiesLabel: 'القدرات والإمكانيات',
        item1: {
          number: '٠١',
          title: 'تجارب الويب الرقمية',
          problemQuote:
            '“حضورنا الرقمي يبدو قديماً وبطيئاً، ولا يعكس القدرات الحقيقية لمنتجاتنا وخدماتنا.”',
          solution:
            'مواقع ويب فريدة ومنصات متكاملة، مصممة حول جمهورك ومهندسة لتحقيق أعلى درجات السرعة والظهور في محركات البحث والنمو المستمر.',
          capabilities: [
            'تصميم الويب والحرفية البصرية (UI/UX)',
            'واجهات أمامية حديثة (React / Vite)',
            'تفاعلات ثلاثية الأبعاد وWebGL خفيفة',
            'بنية إدارة المحتوى اللارأسية (Headless CMS)',
            'سرعة فائقة وتهيئة متقدمة لمحركات البحث (SEO)',
          ],
          ctaText: 'ناقش مشروع ويب',
        },
        item2: {
          number: '٠٢',
          title: 'الذكاء الاصطناعي والأتمتة',
          problemQuote:
            '“ترغب الإدارة في تبني الذكاء الاصطناعي، لكن لا أحد يملك مسارات عمل عملية—مجرد تجارب شكلية وحلول يدوية.”',
          solution:
            'وكلاء ذكاء اصطناعي عمليون ومسارات أتمتة مترابطة ترفع الأعباء الروتينية المتكررة عن كاهل فريقك.',
          capabilities: [
            'وكلاء ذكاء اصطناعي ذاتيو التشغيل',
            'أتمتة متصلة لمسارات العمل والعمليات',
            'تكامل واجهات البرمجة بين الأنظمة المتعددة (APIs)',
            'استرجاع المعرفة المتقدم للنماذج اللغوية (RAG)',
            'أدوات تشغيلية للفرق والعمليات الداخلية',
          ],
          ctaText: 'استكشف حلول الذكاء الاصطناعي',
        },
        item3: {
          number: '٠٣',
          title: 'تطبيقات الجوال',
          problemQuote:
            '“نحتاج إلى تطبيق متماسك لنظامي iOS وAndroid ينال إعجاب المستخدمين، دون عناء إدارة فرق تطوير مجزأة ومشتتة.”',
          solution:
            'تجارب جوال مدروسة بعناية لنظامي iOS وAndroid، تبدأ من بلورة رؤية المنتج وحتى إطلاقه في المتاجر.',
          capabilities: [
            'أداء وإحساس أصيل لنظامي iOS وAndroid',
            'تطوير متعدد المنصات عبر React Native',
            'أنظمة تصميم وأدلة مكونات متكاملة',
            'هندسة متقنة لرحلات المستخدم وسلاسة التفاعل',
            'إطلاق المتاجر والتوسع التشغيلي المستمر',
          ],
          ctaText: 'ابنِ تطبيق جوال',
        },
      },
      work: {
        sectionIndex: '٠٣ / أعمال مختارة',
        sectionSubtitle: 'استكشف التفاصيل ↙',
        titleLine1: 'نحل التحديات',
        titleLine2: 'التي تستحق الحل.',
        description:
          'لا نبدأ بالواجهات؛ بل نبدأ بالأشخاص الذين سيستخدمونها—ظروفهم، ومسارات عملهم، وما يُحدث فارقاً حقيقياً في أعمالهم.',
        project1: {
          client: 'العقيلي',
          industry: 'استشارات قانونية',
          year: '٢٠٢٥',
          title:
            'شركة محاماة واستشارات كبرى احتاجت منصة رقمية رصينة تعكس عقوداً من الخبرة القانونية في المملكة.',
          description:
            'صُممت خصيصاً للعملاء التنفيذيين، ومهندسة لأداء فائق وطباعة ثنائية اللغة (عربي/إنجليزي)، مع مسارات استشارة سلسة وموثوقة.',
          tags: ['تجربة ويب', 'واجهة مستخدم ثنائية اللغة', 'Next.js / Vite', 'نظام إدارة محتوى لارأسي'],
          badge: 'استشارات قانونية',
        },
        project2: {
          client: 'شبكية الرياض',
          industry: 'رعاية صحية متخصصة',
          year: '٢٠٢٥',
          title:
            'المعلومات الطبية الدقيقة لطب العيون قد تُغير حياة المرضى—شريطة الوصول إليها بسهولة ووضوح. بحر جعلت ذلك ممكناً.',
          description:
            'منصة ويب طبية مهندسة لتوجيه المرضى بسرعة، والتحقق من مؤهلات الأطباء، وتسهيل رحلة حجز المواعيد في العاصمة.',
          tags: ['رعاية صحية متخصصة', 'رحلة المريض', 'مؤشرات أداء الويب الأساسية', 'سهولة الوصول الشامل'],
          statNumber: '٩٩.٨٪',
          statLabel: 'سرعة توجيه المرضى',
        },
        project3: {
          client: 'سايك ليج',
          industry: 'تقنية رياضية',
          year: '٢٠٢٥',
          title:
            'بطولات الرياضات الحية تتطلب بيانات فائقة السرعة. سايك ليج احتاجت تتبعاً فورياً ولوائح ترتيب لا تتأخر مطلقاً في ذروة الحركة.',
          description:
            'بناء منصة متفاعلة لإدارة البطولات الرياضية وبث القياسات الحية، متضمنة لوائح المتصدرين، وملفات الرياضيين، وجولات السباق المؤتمتة.',
          tags: ['منصة بالزمن الحقيقي', 'لوحة قياسات حية', 'تقنية رياضية', 'هندسة واجهات البرمجة'],
          badge: 'بيانات قياس حية',
        },
        project4: {
          client: 'لاين أب',
          industry: 'فعاليات وترفيه حي',
          year: '٢٠٢٦',
          title:
            'أجندة الفعاليات في المملكة تتحرك بسرعة غير مسبوقة. لاين أب تمنح الجمهور تحكماً كاملاً في جداول المهرجانات الحية.',
          description:
            'منصة عالية الاستيعاب تدير استكشاف المهرجانات، وتنبيهات المسارح الفورية، وجداول الفنانين، وتوجيه حجوزات التذاكر الضخمة.',
          tags: ['فعاليات وترفيه حي', 'منصة موجهة للجوال', 'مزامنة بالزمن الحقيقي', 'توسع سحابي'],
          badge: 'المسرح أ · ٢٠٢٦',
        },
        inquireCTA: 'استفسر عن مشاريعنا',
        archiveCTA: 'طلب ملف الأعمال الكامل',
      },
      perspectives: {
        sectionIndex: 'رؤى وحرفية',
        sectionSubtitle: 'مزيج الأفكار / تأملات',
        titleLine1: 'ما يشغل تفكيرنا',
        titleLine2: 'في هذه اللحظة.',
        linkedinLink: 'تابع أفكارنا على LinkedIn',
        exploreAction: 'استكشف الرؤية',
        card1: {
          tag: 'استراتيجية الذكاء الاصطناعي',
          author: 'فريق الهندسة في بحر',
          title:
            'معظم الشركات لا تحتاج واجهة محادثة بسيطة. بل تحتاج وكلاء ذاتيي التشغيل يتصلون ببياناتها التشغيلية.',
          blurb:
            'لماذا يحقق التنسيق الحتمي للواجهات البرمجية وتكامل الأدوات عائداً استثمارياً حقيقياً، بينما تتلاشى روبوتات الدردشة العامة.',
        },
        card2: {
          tag: 'أداء الويب',
          author: 'استوديو بحر',
          title:
            'السرعة ميزة تصميم جوهرية: أوقات التحميل الأقل من ثانية تحسم العقود المؤسسية الكبرى في الخليج.',
          blurb:
            'كيف يُسهم التخلص من حمولة أطر العمل الزائدة وتحسين مؤشرات أداء الويب الأساسية في بناء ثقة العميل ورفع معدلات التحويل مباشرة.',
        },
        card3: {
          tag: 'رؤية ٢٠٣٠',
          author: 'قيادة بحر',
          title:
            'التحول الإقليمي من استقدام الكفاءات الخارجية إلى عقد شراكات هندسية عالية الحرفية في المملكة.',
          blurb:
            'الفرق الطموحة تتجه نحو التخلي عن الطبقات الإدارية المتكدسة واختيار شركاء تقنيين مرنين يتشاركون معهم نفس المنطقة الزمنية والمعايير الرفيعة.',
        },
        card4: {
          tag: 'أنظمة التصميم',
          author: 'أنظمة بحر',
          title:
            'أنظمة التصميم ليست للمصممين فقط؛ بل هي الأساس المتين الذي يكتب منه وكلاء الذكاء الاصطناعي الشيفرات البرمجية.',
          blurb:
            'بناء رموز تصميم منضبطة وعقود مكونات برمجية محكمة تحافظ على التزامن التام بين التصميم والهندسة وأدوات الذكاء الاصطناعي.',
        },
      },
      contact: {
        sectionIndex: '٠٤ / فصلك القادم',
        sectionSubtitle: 'يبدأ بحوار بسيط',
        titleLine1: 'لبحر عمقُ آخر',
        titleLine2: 'نحن هنا لنستمع.',
        description: 'أخبرنا إلى أين تطمح بالوصول. ونحن سنمهد لك الطريق.',
        subtext:
          'سواء كنت تطور منصة رقمية كبرى، أو تطلق تطبيق جوال طموح، أو تنشر وكلاء ذكاء اصطناعي لإلغاء العمليات اليدوية—نحن شريك للفرق التي تُقدّر الحرفية والوضوح.',
        primaryBtn: 'ابدأ مشروعاً معنا',
        emailAria: 'راسل وكالة بحر مباشرة عبر البريد الإلكتروني dive@b7r.agency',
        location: 'جدة، المملكة العربية السعودية · نعمل عبر المنطقة. ونفكر بأفق يتجاوزها.',
      },
      footer: {
        tagline: 'جدة، المملكة العربية السعودية \nنعمل عبر المنطقة، ونفكر بأفق يتجاوزها.',
        missionBadge: 'صُنعت من العمق.',
        exploreTitle: 'استكشف',
        homeLink: 'الرئيسية',
        agencyLink: 'عن الوكالة',
        expertiseLink: 'الخبرات',
        workLink: 'أعمال مختارة',
        contactLink: 'تواصل معنا',
        capabilitiesTitle: 'القدرات والإمكانيات',
        webExpLink: 'تجارب الويب',
        aiAutoLink: 'الذكاء الاصطناعي والأتمتة',
        mobileAppsLink: 'تطبيقات الجوال',
        designSystemsLink: 'أنظمة التصميم',
        startProjectTitle: 'ابدأ مشروعاً',
        inquiryCopy: 'تتطلع لبناء مواقع وتطبيقات وأنظمة ذكاء اصطناعي بحرفية فائقة؟',
        responseTime: 'نرد عادةً خلال ٢٤ ساعة',
        copyright: '© {{year}} وكالة بحر. جميع الحقوق محفوظة.',
        backToTop: 'العودة للأعلى',
      },
    },
  },
}

export type SupportedLanguage = 'en' | 'ar'

export const getInitialLanguage = (): SupportedLanguage => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('bahr_lang')
    if (saved === 'ar' || saved === 'en') {
      return saved
    }
  }
  return 'en'
}

export const applyDocumentDirection = (lang: string) => {
  if (typeof document === 'undefined') return
  const isRtl = lang === 'ar'
  const html = document.documentElement
  html.setAttribute('dir', isRtl ? 'rtl' : 'ltr')
  html.setAttribute('lang', lang)
  if (isRtl) {
    html.classList.add('is-rtl')
  } else {
    html.classList.remove('is-rtl')
  }
}

// Initial setup
const initialLang = getInitialLanguage()
applyDocumentDirection(initialLang)

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLang,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already escapes
    },
  })

i18n.on('languageChanged', (lng) => {
  applyDocumentDirection(lng)
  if (typeof window !== 'undefined') {
    localStorage.setItem('bahr_lang', lng)
    window.dispatchEvent(new CustomEvent('bahr-language-changed', { detail: lng }))
  }
})

export default i18n
