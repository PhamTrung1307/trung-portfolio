export const profile = {
  name: "Pham Nguyen Anh Trung",
  shortName: "Trung",
  role: ".NET Backend Developer",
  target: "Fresher/Junior .NET Backend Developer",
  location: "Ho Chi Minh City, Vietnam",
  intro:
    "Tôi tập trung xây dựng backend với ASP.NET Core, RESTful API, SQL Server và Entity Framework Core. Mục tiêu của tôi là tham gia một đội ngũ sản phẩm chuyên nghiệp, viết code rõ ràng, có trách nhiệm và liên tục cải thiện năng lực qua các dự án thực tế.",
  about:
    "Tôi là lập trình viên .NET Backend định hướng Fresher/Junior, có kinh nghiệm thực hành với hệ thống quản lý hóa đơn, CMS, phân quyền người dùng, xử lý nghiệp vụ và tích hợp các công nghệ như JWT, Redis, SignalR, Hangfire và Docker. Tôi yêu thích cách tiếp cận Clean Architecture, API dễ bảo trì và quy trình làm việc có tổ chức.",
  cvUrl: "",
  githubUrl: "https://github.com/PhamTrung1307",
  linkedInUrl: "https://www.linkedin.com/in/phamnguyenanhtrung",
  email: "phamnguyenanhtrung2003@gmail.com",
  phone: "0961 844 664",
  phoneHref: "tel:0961844664"
};

export const highlights = [
  { value: "1+ năm", label: "Kinh nghiệm thực tế" },
  { value: "3", label: "Dự án nổi bật" },
  { value: ".NET 8", label: "Backend stack chính" }
];

export const techStack = [
  "ASP.NET Core",
  "RESTful API",
  "SQL Server",
  "Entity Framework Core",
  "Clean Architecture",
  "JWT Authentication",
  "ReactJS",
  "Redis",
  "SignalR",
  "Hangfire",
  "Docker",
  "Git/GitHub"
];

export const projects = [
  {
    title: "NexInvoice Management System",
    description:
      "Hệ thống SaaS quản lý hóa đơn và dự án với khách hàng, hợp đồng, hóa đơn, thanh toán, báo cáo, thông báo thời gian thực và background jobs.",
    technologies: [
      "ASP.NET Core .NET 8",
      "EF Core",
      "SQL Server",
      "ReactJS",
      "Redis",
      "SignalR",
      "Hangfire",
      "Docker",
      "JWT",
      "Tailwind CSS"
    ],
    githubUrl: "",
    demoUrl: ""
  },
  {
    title: "Blog CMS Web Application",
    description:
      "CMS full-stack với phân quyền Admin, Author và Reader, hỗ trợ phân trang, tìm kiếm, lọc dữ liệu và tài liệu API bằng Swagger.",
    technologies: [
      "ASP.NET Core .NET 8",
      "EF Core",
      "SQL Server",
      "Angular",
      "JWT",
      "ASP.NET Identity"
    ],
    githubUrl: "",
    demoUrl: ""
  },
  {
    title: "Hotel Management System",
    description:
      "Ứng dụng quản lý khách sạn hỗ trợ đặt phòng, check-in/check-out, theo dõi dịch vụ sử dụng và lập hóa đơn thanh toán.",
    technologies: ["ASP.NET Core", "C#", "EF Core", "MySQL", "WinForms/WPF", "DevExpress"],
    githubUrl: "",
    demoUrl: ""
  }
];

export const timeline = [
  {
    period: "06/2025 - Hiện tại",
    title: "Freelance Software Developer",
    company: "NexInvoice Management System",
    description:
      "Phát triển hệ thống full-stack quản lý hóa đơn và dự án, tập trung vào backend, API, luồng nghiệp vụ, xác thực JWT, realtime notification và background processing."
  },
  {
    period: "04/2024 - 05/2025",
    title: "Backend Developer",
    company: "Amazing Tech Software Development Company",
    description:
      "Tham gia phát triển backend, xây dựng API, xử lý dữ liệu, làm việc với cơ sở dữ liệu quan hệ và phối hợp cùng team để hoàn thiện tính năng sản phẩm."
  },
  {
    period: "Mục tiêu hiện tại",
    title: "Fresher/Junior .NET Backend Developer",
    company: "Sẵn sàng cho cơ hội mới",
    description:
      "Tìm kiếm môi trường chuyên nghiệp để phát triển sâu hơn về ASP.NET Core, Clean Architecture, database design và quy trình phát triển phần mềm thực tế."
  }
];
