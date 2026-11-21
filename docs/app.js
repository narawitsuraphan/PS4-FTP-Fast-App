(() => {
  const dict = {
    th: {
      navDownload: "ดาวน์โหลด",
      navFeatures: "สถาปัตยกรรม",
      navGuide: "วิธีติดตั้ง",
      navPaper: "งานวิจัย PDF",
      navGetApp: "โหลดตัวติดตั้ง",
      heroBadge: "RELEASE v1.5.0 · WINDOWS 10 / 11 x64 · .NET 10",
      heroTitle: "ส่งไฟล์เกม PS4 เต็มสปีดสาย LAN พร้อมโหลด URL สลับเซิร์ฟเวอร์อัตโนมัติ",
      heroDesc: "เอนจิน Adaptive v2.3 Hyper-Switch ค้นหาสูงสุด 16 เซิร์ฟเวอร์ผ่าน 6x DNS + Regional ECS ซ้อน Top-6 พร้อมกันและเขียนดิสก์แบบ Elevator — แรงกว่า IDM และ aria2c พร้อม Direct I/O 8 MiB สำหรับไฟล์ 100 GB+ และส่วนเสริมเบราว์เซอร์",
      ctaSetup: "ดาวน์โหลดตัวติดตั้ง Setup (.exe)",
      ctaPortable: "รุ่นพกพา Portable (.exe)",
      trust1: "ไม่ต้องใช้สิทธิ์ Admin (Per-User Install)",
      trust2: "จองพื้นที่ NTFS ต่อเนื่อง 1 ชิ้นไม่แตกไฟล์",
      trust3: "ตรวจสอบ SHA-256 ครบทุกไฟล์",
      tabUpload: "หน้าส่งเข้า PS4",
      tabDownloads: "โหลด URL v2.2",
      tabSetup: "ติดตั้งและระบบ",
      tabWelcome: "หน้าต้อนรับ",
      tabSplash: "หน้าโหลดเข้าแอป",
      m1: "ความเร็วสูงสุดส่งเข้า PS4 ผ่านสาย LAN (946 Mbps)",
      m2: "ความเร็วโหลด URL จริงผ่าน Adaptive v2.3 Hyper-Switch (760 Mbps)",
      m3: "จองพื้นที่ดิสก์ต่อเนื่อง ไฟล์ไม่แตกชิ้นบน HDD",
      m4: "ค้นหาและสลับเซิร์ฟเวอร์อัตโนมัติสูงสุด 16 แห่งพร้อม Top-6 Striping",
      dlHeading: "ดาวน์โหลดแพ็กเกจเวอร์ชันล่าสุด (v1.5.0)",
      dlSub: "เลือกดาวน์โหลดแบบตัวติดตั้งเต็มรูปแบบ รุ่นพกพา หรือไฟล์ส่วนเสริมเบราว์เซอร์ — พร้อมค่า SHA-256 ยืนยันความถูกต้อง",
      tagRecommended: "แนะนำ",
      dlSetupDesc: "ตัวติดตั้ง GUI ธีมแดงดำครบชุด — ติดตั้งตัวแอปลงเครื่อง สร้างทางลัด Start Menu / Desktop เมนูคลิกขวา .pkg และลงทะเบียนส่วนเสริม Brave / Chrome / Edge อัตโนมัติ (ไม่ต้องใช้สิทธิ์ Admin)",
      dlPortableDesc: "ไฟล์เดียวเปิดใช้งานได้ทันทีโดยไม่ต้องติดตั้ง เหมาะสำหรับพกใส่แฟลชไดรฟ์หรือเปิดใช้งานด่วน (ยังคงกดติดตั้งลงเครื่องภายหลังได้จากแท็บ \"ติดตั้งและระบบ\" ภายในแอป)",
      dlExtDesc: "ส่วนเสริมดักจับดาวน์โหลดอัตโนมัติสไตล์ IDM — จับไฟล์ .pkg และไฟล์ขนาด ≥ 10 MB จากปุ่มโหลด JavaScript (เช่น Mocha) ส่งเข้าคิว PS4 FTP Fast ทันที พร้อมปุ่มคลิกเปิด/ปิด ON-OFF",
      dlPaperDesc: "เอกสารงานวิจัยฉบับภาษาอังกฤษ 5 หน้า — วิเคราะห์คอขวดสาย LAN 100M/1000M, คิว Bufferbloat 44.3 ms, Win32 Direct I/O 0 MB RAM และผลทดสอบชนตรง IDM / aria2c / curl โดย Narawit Suraphan (GPT-6.2 Astra · GPT-6.2 Sol · Gemini 4 Neon)",
      copyBtn: "คัดลอก",
      copiedBtn: "คัดลอกแล้ว",
      dlNow: "ดาวน์โหลด .exe",
      dlZip: "ดาวน์โหลด .zip",
      dlPdf: "เปิดอ่าน / โหลด PDF",
      reqNote: "ความต้องการระบบ: Windows 10 / 11 (64-bit) และ .NET 10 Desktop Runtime (x64) · ใช้งานร่วมกับ GoldHEN FTP พอร์ต 2121 บน PS4",
      featHeading: "วิศวกรรมเบื้องหลังความเร็ว",
      featSub: "ทุกส่วนสร้างจากผลวัดจริงทั้งฝั่งดิสก์ NTFS, Dual-Stack IPv4/IPv6 และสาย Gigabit LAN",
      f1Title: "เอนจินส่งไฟล์ PS4 ระดับ Gigabit + Cockpit สด",
      f1Desc: "อ่านไฟล์ขนาด 100 GB+ ด้วย Direct I/O 8 MiB (FILE_FLAG_NO_BUFFERING) ริงบัฟเฟอร์ 64 MiB ไม่กินแรมแคช Windows พร้อม KeepAlive กันหลุดงานหลายชั่วโมง ตรวจจับลิงก์ 100 Mbps/Ping อัตโนมัติ และ Cockpit แดงดำสด",
      f2Title: "Adaptive v2.3 Hyper-Switch (16 เซิร์ฟเวอร์ + Top-6)",
      f2Desc: "ค้นหาเซิร์ฟเวอร์สูงสุด 16 แห่งแบบ Zero-Delay ผ่าน 6x UDP DNS + Regional ECS DoH ซ้อน Top-6 เซิร์ฟเวอร์เร็วสุดพร้อมกัน เขียนดิสก์แบบ Elevator 64 MiB ไม่บล็อกเน็ต — วัดจริงเร็วกว่า IDM 87% และ aria2c 26–153%",
      f3Title: "เขียนลง HDD ไม่แตกชิ้น + Front-Frontier",
      f3Desc: "จองพื้นที่ต่อเนื่องด้วย NTFS PreallocationSize และแจกช่วงดาวน์โหลดเรียงจากด้านหน้าไฟล์ ลดอาการ HDD หัวอ่านสะบัดและ zero-fill ค้าง ทำให้ไฟล์ที่โหลดเสร็จพร้อมส่งเข้า PS4 ได้เต็มความเร็วทันที",
      f4Title: "ส่วนเสริมดักจับดาวน์โหลดเบราว์เซอร์แบบ IDM",
      f4Desc: "ไม่ต้องหาลิงก์คัดลอกเองอีกต่อไป แค่กดโหลดใน Brave / Chrome / Edge ส่วนเสริมจะรับลิงก์ที่มี Token ส่งตรงเข้าคิว PS4 FTP Fast และเริ่มโหลดให้ทันที รองรับการกด \"ดาวน์โหลดทั้งหมด\" หลายไฟล์พร้อมกัน",
      guideHeading: "เริ่มใช้งานใน 3 ขั้นตอน",
      guideSub: "ตั้งค่าครั้งเดียว ใช้งานลื่นทั้งโหลดเกมจากเว็บและส่งเข้า PS4",
      s1Title: "รันตัวติดตั้ง Setup",
      s1Desc: "เปิดไฟล์ PS4-FTP-Fast-Setup-v1.5.0.exe เลือกโฟลเดอร์เก็บไฟล์ดาวน์โหลด แล้วกดติดตั้ง — ใช้เวลาไม่ถึง 3 วินาที ไม่ต้องใช้สิทธิ์ Admin",
      s2Title: "เปิดส่วนเสริมใน Brave / Chrome / Edge",
      s2Desc: "เปิดหน้า brave://extensions เปิด Developer mode กด Load unpacked แล้วเลือกโฟลเดอร์ browser-extension (กดปุ่ม \"เปิดโฟลเดอร์ส่วนเสริม\" ในแอปได้เลย) และปิด IDM ชั่วคราวไม่ให้แย่งจับลิงก์",
      s3Title: "โหลดเกมและส่งเข้า PS4",
      s3Desc: "คลิกโหลดเกมจากหน้าเว็บตามปกติ ตัวแอปจะโหลดให้เต็มสปีดอัตโนมัติ เสร็จแล้วกด \"ส่งเข้า PS4\" ระบุ IP และพอร์ต 2121 ของ GoldHEN ได้ทันที"
    },
    en: {
      navDownload: "Downloads",
      navFeatures: "Architecture",
      navGuide: "Quick Setup",
      navPaper: "Research PDF",
      navGetApp: "Get Installer",
      heroBadge: "RELEASE v1.5.0 · WINDOWS 10 / 11 x64 · .NET 10",
      heroTitle: "Gigabit LAN PS4 Package Transfers + Hyper-Switch v2.3 URL Engine",
      heroDesc: "Adaptive v2.3 Hyper-Switch discovers up to 16 edge servers via 6x DNS + Regional ECS, stacks Top-6 fastest servers with Elevator async disk flushing — outperforming IDM & aria2c — plus 8 MiB Direct I/O for 100 GB+ PS4 uploads.",
      ctaSetup: "Download Setup Installer (.exe)",
      ctaPortable: "Portable Build (.exe)",
      trust1: "Zero Admin UAC (Per-User Install)",
      trust2: "1-Extent Contiguous NTFS Preallocation",
      trust3: "Verified SHA-256 Checksums",
      tabUpload: "PS4 Upload Cockpit",
      tabDownloads: "URL Engine v2.2",
      tabSetup: "Install & System",
      tabWelcome: "Welcome",
      tabSplash: "Splash Screen",
      m1: "Peak LAN transfer speed to PS4 (946 Mbps)",
      m2: "Live WAN peak via Adaptive v2.3 Hyper-Switch (760 Mbps)",
      m3: "Contiguous NTFS disk preallocation on HDD",
      m4: "Auto-discovered switchable edge servers with Top-6 striping",
      dlHeading: "Download Latest Release (v1.5.0)",
      dlSub: "Choose the full GUI Setup installer, single-file Portable executable, or standalone Browser Extension package — verified with SHA-256.",
      tagRecommended: "RECOMMENDED",
      dlSetupDesc: "Full Crimson Carbon GUI installer — installs the desktop app, creates Start Menu / Desktop shortcuts, adds .pkg right-click menu, and registers the Brave / Chrome / Edge bridge automatically (no admin required).",
      dlPortableDesc: "Single standalone executable ready to launch from any drive without installation. You can still install or update system integration anytime from the in-app Setup tab.",
      dlExtDesc: "IDM-style automatic download catcher — intercepts .pkg files and downloads ≥ 10 MB from JavaScript buttons (including Mocha) and queues them directly into PS4 FTP Fast with a one-click ON/OFF badge.",
      dlPaperDesc: "5-page English systems research paper analyzing 100M/1000M LAN fallbacks, 44.3 ms bufferbloat queuing, zero-cache Win32 Direct I/O, and head-to-head benchmarks vs. IDM, aria2c, and curl — by Narawit Suraphan (GPT-6.2 Astra · GPT-6.2 Sol · Gemini 4 Neon).",
      copyBtn: "Copy",
      copiedBtn: "Copied",
      dlNow: "Download .exe",
      dlZip: "Download .zip",
      dlPdf: "Read / Download PDF",
      reqNote: "Requirements: Windows 10 / 11 (64-bit) and .NET 10 Desktop Runtime (x64) · Compatible with GoldHEN FTP port 2121 on PS4.",
      featHeading: "Engineered for Real Throughput",
      featSub: "Every subsystem tuned from real NTFS extent, Dual-Stack IPv4/IPv6, and Gigabit LAN measurements.",
      f1Title: "Gigabit PS4 FTP Pipeline + Live Telemetry Cockpit",
      f1Desc: "8 MiB Direct I/O (FILE_FLAG_NO_BUFFERING) with 64 MiB read-ahead ring for 100 GB+ files, TCP KeepAlive for multi-hour resilience, instant 100 Mbps/RTT link diagnosis, and live Crimson Carbon telemetry cockpit.",
      f2Title: "Adaptive v2.3 Hyper-Switch (16 Edges + Top-6 Striping)",
      f2Desc: "Zero-delay startup with 6x global UDP DNS + Regional ECS DoH discovering up to 16 edge servers, dynamic Top-6 parallel striping, and 64 MiB Elevator async disk flushing — outperforming IDM by +87% and aria2c by +26–153%.",
      f3Title: "Zero-Fragmentation HDD Writes + Front-Frontier",
      f3Desc: "Reserves contiguous NTFS space up front and allocates sequential front-frontier chunks to eliminate multi-GB NTFS VDL zero-fill stalls and HDD seek thrashing.",
      f4Title: "IDM-Style Browser Auto-Catch Extension",
      f4Desc: "No link hunting required — click Download in Brave, Chrome, or Edge and the extension hands signed token URLs directly into PS4 FTP Fast and starts downloading immediately.",
      guideHeading: "Ready in 3 Steps",
      guideSub: "One-time setup for seamless web downloads and PS4 transfers.",
      s1Title: "Run Setup Installer",
      s1Desc: "Launch PS4-FTP-Fast-Setup-v1.5.0.exe, pick your default download folder, and click Install — finishes in under 3 seconds with zero admin prompts.",
      s2Title: "Load Extension in Brave / Chrome / Edge",
      s2Desc: "Open brave://extensions, enable Developer mode, click Load unpacked, select the browser-extension folder (one click from the app's Setup tab), and pause IDM integration if active.",
      s3Title: "Download & Send to PS4",
      s3Desc: "Click any game download normally — PS4 FTP Fast catches it at full speed. Once finished, click Send to PS4 and enter your GoldHEN IP and port 2121."
    }
  };

  let currentLang = "th";

  function applyLang(lang) {
    currentLang = dict[lang] ? lang : "th";
    document.documentElement.lang = currentLang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[currentLang][key]) el.textContent = dict[currentLang][key];
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === currentLang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });

  // Interactive preview screen tabs
  const previewImg = document.getElementById("previewImg");
  document.querySelectorAll(".stage-tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      const src = tab.getAttribute("data-src");
      if (src && previewImg) previewImg.src = src;
      document.querySelectorAll(".stage-tab").forEach((t) => {
        const active = t === tab;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
    });
  });

  // Copy SHA-256 buttons
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const val = btn.getAttribute("data-copy") || "";
      try {
        await navigator.clipboard.writeText(val);
        btn.classList.add("copied");
        btn.textContent = dict[currentLang].copiedBtn;
        setTimeout(() => {
          btn.classList.remove("copied");
          btn.textContent = dict[currentLang].copyBtn;
        }, 1800);
      } catch {}
    });
  });

  // Subtle realistic telemetry readout fluctuation (respects reduced motion)
  const readout = document.getElementById("liveSpeedReadout");
  const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (readout && !reduced) {
    const samples = [112.4, 114.8, 116.2, 118.3, 115.6, 113.9, 117.1, 114.2];
    let idx = 0;
    setInterval(() => {
      idx = (idx + 1) % samples.length;
      readout.textContent = `${samples[idx].toFixed(1)} MB/s`;
    }, 1800);
  }
})();

