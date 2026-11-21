# Changelog

All notable binary releases of **PS4 FTP Fast** by **Narawit Suraphan**.

## v1.5.0 — 2026-11-21 (Adaptive v2.3 Hyper-Switch)
- **Zero-Delay Multi-Resolver Server Discovery:** Starts immediately on local System DNS (`< 3 ms`) while asynchronously probing 6 global UDP/53 resolvers (`1.1.1.1`, `8.8.8.8`, `9.9.9.9`, OpenDNS, AdGuard, DNSPod) + Cloudflare/DNSPod DoH + Google Regional ECS (`TH / SG / HK / JP`), expanding switchable edge servers up to **16 verified low-RTT endpoints** (with 45s mid-download DNS refresh).
- **Dynamic Top-6 Multi-Server Striping:** Stacks up to 6 qualified fast servers simultaneously using post-TTFB EWMA speed weighting while starving slow edges and rejecting corrupt mirrors via parallel head+tail 4 KiB SHA-256 verification.
- **Elevator-Sorted Async Write-Behind Disk Flusher (`64 MiB` Ring):** Decouples TCP socket reads from HDD writes with `2 MiB` offset-sorted coalesced flushes (`0.0 ms` TCP blocking, `1-extent` NTFS output).
- **Zero-Gap Dynamic Chunking & 64-Stream Scaling:** Outperforms IDM (`+86.9%` live WAN, `7.57x` per-conn cap) and aria2c (`+25.9%` live WAN, `2.53x` 5-server race).

## v1.4.0 — 2026-11-21 (100 GB+ Direct I/O Upload Engine)
- **`DirectAlignedStream` (`FILE_FLAG_NO_BUFFERING | OVERLAPPED`):** 64 KiB-aligned 4–8 MiB direct reads with 64 MiB async read-ahead ring (`0 MB` Windows Standby RAM pollution on 112 GB+ `.pkg` transfers).
- **Multi-Hour FTP Control KeepAlive (`30s`):** Prevents idle NAT/router drops during multi-hour 100 GB+ uploads.
- **Live Kernel `SIO_TCP_INFO` RTT & 10-Second Fault Diagnosis:** Automatically detects `100 Mbps` Ethernet link fallbacks and `HighLatency` across both uploads and benchmarks.

## v1.3.0 — 2026-11-20 (Crimson Carbon UI)
- Complete handcrafted Crimson Carbon hardware telemetry UI with 30 FPS optical PC-to-PS4 packet bus, 220° radial Gigabit speedometer, live oscilloscope, and 4-language support (`EN / ไทย / 日本語 / Español`).

## v1.2.1 — 2026-11-20 (IDM-Style Browser Auto-Catch & Adaptive v2.2)
- Added Brave / Chrome / Edge MV3 auto-catch extension with one-click ON/OFF badge and auto-queue handoff.
- Added Adaptive v2.2 post-TTFB Auto Server Switcher and Front-Frontier NTFS preallocation.

