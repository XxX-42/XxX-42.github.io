const resumeData = {
  hero: {
    name: "梁嘉轩",
    title: "数学建模指引 & 资深架构研发",
    email: "lorrnine@gmail.com",
    github: "https://xxx-42.github.io/", // You can update this link later
    phone: "17748035450"
  },

  projects: [
    {
      title: "VIP 智能人像识别与目标监控系统",
      date: "2023.09 - 2024.01",
      role: "核心开发工程师",
      techStack: ["Python", "YOLOv8", "OpenCV", "Tkinter", "face_recognition"],
      description: [
        "独立开发了一套结合多目标检测与高精度人脸比对的实时监控报警与 VIP 识别系统，支持本地视频流实时推拉与离线图片处理，解决传统监控极易漏检的痛点。",
        "设计 Two-Stage 推理 Pipeline。使用轻量级 YOLOv8 排除背景干扰并精准定位人物对象，截取感兴趣区域（ROI）送入特征提取网络计算 128 维特征编码。",
        "开发离线提征模块，将 VIP 特征序列化存储实现毫秒级快速遍历；封装可交互客户端并支持多线程异步渲染防止 UI 线程阻塞。",
        "通过置信度和 NMS 阈值约束消除高频重叠导致的误报；在普通 CPU/单卡 GPU 环境下，多屏推拉稳定在 30 帧以上，复杂背景特征匹配精准匹配延迟 <30ms，准确率达 95% 以上。"
      ],
      githubLink: "https://github.com/XxX-42/YOLO" // Optional
    },
    {
      title: "基于 SRGAN 的图像与视频超分辨率重建平台",
      date: "2024.02 - 2024.06",
      role: "核心研发工程师",
      techStack: ["PyTorch", "SRGAN", "OpenCV", "Tkinter", "TensorBoard"],
      description: [
        "针对低画质视频与监控素材等细节缺失的问题，设计并实现一套基于生成对抗网络的超分辨率（Super-Resolution）系统，支持端到端的 4 倍高清画质重建。",
        "底层使用 16 层 SRResNet 生成器并配合深度 CNN 判别器，结合 VGG19 预训练网络提取高维特征计算感知与对抗联合损失，强迫网络学习长高频细节特征。",
        "独立开发跨平台可视化桌面终端，支持原图/双三次插值/SRGAN 的多线程平行对比渲染；开发视频独立编解码解析引擎同步完成模型端到端落地。",
        "优化自适应 DataLoader 和数据流管线，利用自定义批次预处理解决长耗时显存瓶颈。推理速度优化至 80ms/帧级别，测试集中 PSNR 达 28.5dB。"
      ],
      githubLink: "https://github.com/XxX-42/CUITSRGAN" // Optional
    }
  ],

  awards: [
    {
      name: "美国大学生数学建模竞赛 (MCM) - 国际二等奖",
      date: "2025年",
      description: "在高压环境下，独立完成从非结构化业务问题拆解、数学建模，至严谨的机制求解验证及全英文高质量学术报告排版输出闭环。"
    },
    {
      name: "数维杯大学生数学建模竞赛 (ShuWei) - 国家一等奖",
      date: "2024年",
      description: "在复杂实证场景下运用现代数学工具进行模型抽象与预测分析，产出兼具学术深度与工程化实用价值的推导报告方案。"
    },
    {
      name: "亚太地区大学生数学建模竞赛 (APMCM) - 三等奖",
      date: "2023年",
      description: "熟练落地基于主流算法模型的数据处理特征提取评估流，并具备规范的全英文学术导向论文排版实战经验。"
    },
    {
      name: "全国大学生英语竞赛 / 六级 / 四级",
      date: "2023年",
      description: "全国大学生英语竞赛 C类二等奖；大学英语六级 (CET-6 452分)。跨越了技术人员阅读外文原版文献、直接获取第一手技术资料与科研沟通的基础门槛。"
    }
  ]
};
