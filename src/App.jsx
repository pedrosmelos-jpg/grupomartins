15:52:21.902 Running build in Washington, D.C., USA (East) – iad1
15:52:21.902 Build machine configuration: 2 cores, 7 GB
15:52:22.025 Cloning github.com/pedrosmelos-jpg/grupomartins (Branch: main, Commit: f31a9d7)
15:52:22.496 Cloning completed: 471.000ms
15:52:22.634 Restored build cache from previous deployment (BqfHsZ7WT7fty3U4yy6tktQxw6Cn)
15:52:24.980 Running "vercel build"
15:52:24.994 Vercel CLI 65.15.0
15:52:25.724 Installing dependencies...
15:52:26.551 npm warn Unknown env config "cache-dir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
15:52:28.834 
15:52:28.834 up to date in 3s
15:52:28.835 
15:52:28.835 7 packages are looking for funding
15:52:28.835   run `npm fund` for details
15:52:28.836 npm warn install-scripts 1 package has install scripts not yet covered by allowScripts:
15:52:28.836 npm warn install-scripts   esbuild@0.21.5 (postinstall: node install.js)
15:52:28.836 npm warn install-scripts
15:52:28.836 npm warn install-scripts Run `npm install-scripts ls` to review, or `npm install-scripts approve <pkg>` to allow.
15:52:28.881 Running "npm run build"
15:52:29.016 npm warn Unknown env config "cache-dir". This will stop working in the next major version of npm. See `npm help npmrc` for supported config options.
15:52:29.041 
15:52:29.042 > grupomartins-erp@3.6.0 build
15:52:29.042 > vite build
15:52:29.042 
15:52:29.304 vite v5.4.21 building for production...
15:52:29.369 transforming...
15:52:29.743 ✓ 9 modules transformed.
15:52:29.745 x Build failed in 404ms
15:52:29.745 error during build:
15:52:29.746 [vite:esbuild] Transform failed with 78 errors:
15:52:29.746 /vercel/path0/src/App.jsx:3056:8: ERROR: The symbol "React" has already been declared
15:52:29.746 /vercel/path0/src/App.jsx:3056:17: ERROR: The symbol "useState" has already been declared
15:52:29.746 /vercel/path0/src/App.jsx:3056:27: ERROR: The symbol "useMemo" has already been declared
15:52:29.746 /vercel/path0/src/App.jsx:3056:36: ERROR: The symbol "useEffect" has already been declared
15:52:29.746 /vercel/path0/src/App.jsx:3058:2: ERROR: The symbol "LayoutDashboard" has already been declared
15:52:29.747 ...
15:52:29.747 file: /vercel/path0/src/App.jsx:3056:8
15:52:29.747 
15:52:29.747 The symbol "React" has already been declared
15:52:29.747 3054|      </div>
15:52:29.747 3055|    );
15:52:29.748 3056|  }import React, { useState, useMemo, useEffect } from 'react';
15:52:29.748    |          ^
15:52:29.748 3057|  import {
15:52:29.748 3058|    LayoutDashboard,
15:52:29.748 
15:52:29.748 The symbol "useState" has already been declared
15:52:29.748 3054|      </div>
15:52:29.748 3055|    );
15:52:29.748 3056|  }import React, { useState, useMemo, useEffect } from 'react';
15:52:29.748    |                   ^
15:52:29.748 3057|  import {
15:52:29.748 3058|    LayoutDashboard,
15:52:29.748 
15:52:29.748 The symbol "useMemo" has already been declared
15:52:29.748 3054|      </div>
15:52:29.748 3055|    );
15:52:29.748 3056|  }import React, { useState, useMemo, useEffect } from 'react';
15:52:29.748    |                             ^
15:52:29.748 3057|  import {
15:52:29.748 3058|    LayoutDashboard,
15:52:29.748 
15:52:29.748 The symbol "useEffect" has already been declared
15:52:29.748 3054|      </div>
15:52:29.748 3055|    );
15:52:29.748 3056|  }import React, { useState, useMemo, useEffect } from 'react';
15:52:29.748    |                                      ^
15:52:29.749 3057|  import {
15:52:29.749 3058|    LayoutDashboard,
15:52:29.749 
15:52:29.749 The symbol "LayoutDashboard" has already been declared
15:52:29.749 3056|  }import React, { useState, useMemo, useEffect } from 'react';
15:52:29.749 3057|  import {
15:52:29.749 3058|    LayoutDashboard,
15:52:29.749    |    ^
15:52:29.749 3059|    ArrowUpDown,
15:52:29.749 3060|    FileSpreadsheet,
15:52:29.749 
15:52:29.749 The symbol "ArrowUpDown" has already been declared
15:52:29.749 3057|  import {
15:52:29.749 3058|    LayoutDashboard,
15:52:29.749 3059|    ArrowUpDown,
15:52:29.749    |    ^
15:52:29.749 3060|    FileSpreadsheet,
15:52:29.749 3061|    Briefcase,
15:52:29.749 
15:52:29.749 The symbol "FileSpreadsheet" has already been declared
15:52:29.749 3058|    LayoutDashboard,
15:52:29.749 3059|    ArrowUpDown,
15:52:29.749 3060|    FileSpreadsheet,
15:52:29.749    |    ^
15:52:29.749 3061|    Briefcase,
15:52:29.749 3062|    UserCheck,
15:52:29.749 
15:52:29.749 The symbol "Briefcase" has already been declared
15:52:29.749 3059|    ArrowUpDown,
15:52:29.749 3060|    FileSpreadsheet,
15:52:29.749 3061|    Briefcase,
15:52:29.749    |    ^
15:52:29.749 3062|    UserCheck,
15:52:29.749 3063|    Settings,
15:52:29.749 
15:52:29.749 The symbol "UserCheck" has already been declared
15:52:29.749 3060|    FileSpreadsheet,
15:52:29.750 3061|    Briefcase,
15:52:29.750 3062|    UserCheck,
15:52:29.750    |    ^
15:52:29.750 3063|    Settings,
15:52:29.750 3064|    Plus,
15:52:29.750 
15:52:29.750 The symbol "Settings" has already been declared
15:52:29.750 3061|    Briefcase,
15:52:29.750 3062|    UserCheck,
15:52:29.750 3063|    Settings,
15:52:29.750    |    ^
15:52:29.750 3064|    Plus,
15:52:29.750 3065|    Search,
15:52:29.750 
15:52:29.750 The symbol "Plus" has already been declared
15:52:29.750 3062|    UserCheck,
15:52:29.750 3063|    Settings,
15:52:29.750 3064|    Plus,
15:52:29.750    |    ^
15:52:29.750 3065|    Search,
15:52:29.750 3066|    Filter,
15:52:29.750 
15:52:29.750 The symbol "Search" has already been declared
15:52:29.750 3063|    Settings,
15:52:29.750 3064|    Plus,
15:52:29.750 3065|    Search,
15:52:29.750    |    ^
15:52:29.750 3066|    Filter,
15:52:29.752 3067|    Download,
15:52:29.752 
15:52:29.752 The symbol "Filter" has already been declared
15:52:29.752 3064|    Plus,
15:52:29.752 3065|    Search,
15:52:29.752 3066|    Filter,
15:52:29.752    |    ^
15:52:29.752 3067|    Download,
15:52:29.752 3068|    CheckCircle2,
15:52:29.752 
15:52:29.752 The symbol "Download" has already been declared
15:52:29.752 3065|    Search,
15:52:29.752 3066|    Filter,
15:52:29.752 3067|    Download,
15:52:29.752    |    ^
15:52:29.752 3068|    CheckCircle2,
15:52:29.753 3069|    Clock,
15:52:29.753 
15:52:29.753 The symbol "CheckCircle2" has already been declared
15:52:29.753 3066|    Filter,
15:52:29.753 3067|    Download,
15:52:29.753 3068|    CheckCircle2,
15:52:29.753    |    ^
15:52:29.753 3069|    Clock,
15:52:29.753 3070|    AlertTriangle,
15:52:29.753 
15:52:29.753 The symbol "Clock" has already been declared
15:52:29.753 3067|    Download,
15:52:29.753 3068|    CheckCircle2,
15:52:29.753 3069|    Clock,
15:52:29.754    |    ^
15:52:29.754 3070|    AlertTriangle,
15:52:29.754 3071|    TrendingUp,
15:52:29.754 
15:52:29.754 The symbol "AlertTriangle" has already been declared
15:52:29.754 3068|    CheckCircle2,
15:52:29.754 3069|    Clock,
15:52:29.754 3070|    AlertTriangle,
15:52:29.755    |    ^
15:52:29.755 3071|    TrendingUp,
15:52:29.755 3072|    TrendingDown,
15:52:29.755 
15:52:29.755 The symbol "TrendingUp" has already been declared
15:52:29.755 3069|    Clock,
15:52:29.755 3070|    AlertTriangle,
15:52:29.755 3071|    TrendingUp,
15:52:29.755    |    ^
15:52:29.755 3072|    TrendingDown,
15:52:29.755 3073|    Wallet,
15:52:29.755 
15:52:29.755 The symbol "TrendingDown" has already been declared
15:52:29.755 3070|    AlertTriangle,
15:52:29.755 3071|    TrendingUp,
15:52:29.755 3072|    TrendingDown,
15:52:29.755    |    ^
15:52:29.755 3073|    Wallet,
15:52:29.755 3074|    Building2,
15:52:29.755 
15:52:29.755 The symbol "Wallet" has already been declared
15:52:29.755 3071|    TrendingUp,
15:52:29.755 3072|    TrendingDown,
15:52:29.756 3073|    Wallet,
15:52:29.756    |    ^
15:52:29.756 3074|    Building2,
15:52:29.756 3075|    Printer,
15:52:29.756 
15:52:29.756 The symbol "Building2" has already been declared
15:52:29.756 3072|    TrendingDown,
15:52:29.756 3073|    Wallet,
15:52:29.757 3074|    Building2,
15:52:29.757    |    ^
15:52:29.758 3075|    Printer,
15:52:29.758 3076|    RotateCcw,
15:52:29.758 
15:52:29.758 The symbol "Printer" has already been declared
15:52:29.758 3073|    Wallet,
15:52:29.758 3074|    Building2,
15:52:29.758 3075|    Printer,
15:52:29.758    |    ^
15:52:29.759 3076|    RotateCcw,
15:52:29.759 3077|    Trash2,
15:52:29.759 
15:52:29.760 The symbol "RotateCcw" has already been declared
15:52:29.760 3074|    Building2,
15:52:29.760 3075|    Printer,
15:52:29.761 3076|    RotateCcw,
15:52:29.761    |    ^
15:52:29.761 3077|    Trash2,
15:52:29.761 3078|    Edit3,
15:52:29.761 
15:52:29.761 The symbol "Trash2" has already been declared
15:52:29.762 3075|    Printer,
15:52:29.762 3076|    RotateCcw,
15:52:29.762 3077|    Trash2,
15:52:29.762    |    ^
15:52:29.762 3078|    Edit3,
15:52:29.762 3079|    X,
15:52:29.762 
15:52:29.762 The symbol "Edit3" has already been declared
15:52:29.762 3076|    RotateCcw,
15:52:29.762 3077|    Trash2,
15:52:29.762 3078|    Edit3,
15:52:29.762    |    ^
15:52:29.762 3079|    X,
15:52:29.762 3080|    ChevronRight,
15:52:29.762 
15:52:29.762 The symbol "X" has already been declared
15:52:29.762 3077|    Trash2,
15:52:29.762 3078|    Edit3,
15:52:29.762 3079|    X,
15:52:29.762    |    ^
15:52:29.762 3080|    ChevronRight,
15:52:29.762 3081|    ShieldCheck,
15:52:29.762 
15:52:29.762 The symbol "ChevronRight" has already been declared
15:52:29.762 3078|    Edit3,
15:52:29.762 3079|    X,
15:52:29.763 3080|    ChevronRight,
15:52:29.763    |    ^
15:52:29.763 3081|    ShieldCheck,
15:52:29.763 3082|    Leaf,
15:52:29.763 
15:52:29.763 The symbol "ShieldCheck" has already been declared
15:52:29.763 3079|    X,
15:52:29.763 3080|    ChevronRight,
15:52:29.764 3081|    ShieldCheck,
15:52:29.764    |    ^
15:52:29.764 3082|    Leaf,
15:52:29.764 3083|    Award,
15:52:29.764 
15:52:29.764 The symbol "Leaf" has already been declared
15:52:29.765 3080|    ChevronRight,
15:52:29.766 3081|    ShieldCheck,
15:52:29.766 3082|    Leaf,
15:52:29.766    |    ^
15:52:29.766 3083|    Award,
15:52:29.766 3084|    DollarSign,
15:52:29.766 
15:52:29.767 The symbol "Award" has already been declared
15:52:29.767 3081|    ShieldCheck,
15:52:29.767 3082|    Leaf,
15:52:29.767 3083|    Award,
15:52:29.767    |    ^
15:52:29.767 3084|    DollarSign,
15:52:29.767 3085|    FileText,
15:52:29.767 
15:52:29.767 The symbol "DollarSign" has already been declared
15:52:29.767 3082|    Leaf,
15:52:29.767 3083|    Award,
15:52:29.767 3084|    DollarSign,
15:52:29.767    |    ^
15:52:29.767 3085|    FileText,
15:52:29.767 3086|    Calendar,
15:52:29.767 
15:52:29.767 The symbol "FileText" has already been declared
15:52:29.767 3083|    Award,
15:52:29.767 3084|    DollarSign,
15:52:29.767 3085|    FileText,
15:52:29.767    |    ^
15:52:29.767 3086|    Calendar,
15:52:29.767 3087|    CreditCard,
15:52:29.767 
15:52:29.771 The symbol "Calendar" has already been declared
15:52:29.771 3084|    DollarSign,
15:52:29.771 3085|    FileText,
15:52:29.771 3086|    Calendar,
15:52:29.771    |    ^
15:52:29.771 3087|    CreditCard,
15:52:29.771 3088|    Eye,
15:52:29.771 
15:52:29.771 The symbol "CreditCard" has already been declared
15:52:29.771 3085|    FileText,
15:52:29.772 3086|    Calendar,
15:52:29.772 3087|    CreditCard,
15:52:29.772    |    ^
15:52:29.772 3088|    Eye,
15:52:29.772 3089|    Menu,
15:52:29.772 
15:52:29.772 The symbol "Eye" has already been declared
15:52:29.773 3086|    Calendar,
15:52:29.773 3087|    CreditCard,
15:52:29.773 3088|    Eye,
15:52:29.773    |    ^
15:52:29.773 3089|    Menu,
15:52:29.773 3090|    Users,
15:52:29.773 
15:52:29.773 The symbol "Menu" has already been declared
15:52:29.774 3087|    CreditCard,
15:52:29.774 3088|    Eye,
15:52:29.774 3089|    Menu,
15:52:29.774    |    ^
15:52:29.774 3090|    Users,
15:52:29.774 3091|    Network,
15:52:29.774 
15:52:29.774 The symbol "Users" has already been declared
15:52:29.774 3088|    Eye,
15:52:29.774 3089|    Menu,
15:52:29.774 3090|    Users,
15:52:29.774    |    ^
15:52:29.774 3091|    Network,
15:52:29.774 3092|    Lock,
15:52:29.774 
15:52:29.774 The symbol "Network" has already been declared
15:52:29.775 3089|    Menu,
15:52:29.775 3090|    Users,
15:52:29.775 3091|    Network,
15:52:29.775    |    ^
15:52:29.775 3092|    Lock,
15:52:29.775 3093|    Unlock,
15:52:29.775 
15:52:29.775 The symbol "Lock" has already been declared
15:52:29.775 3090|    Users,
15:52:29.775 3091|    Network,
15:52:29.775 3092|    Lock,
15:52:29.775    |    ^
15:52:29.775 3093|    Unlock,
15:52:29.775 3094|    Phone,
15:52:29.775 
15:52:29.775 The symbol "Unlock" has already been declared
15:52:29.775 3091|    Network,
15:52:29.775 3092|    Lock,
15:52:29.775 3093|    Unlock,
15:52:29.775    |    ^
15:52:29.775 3094|    Phone,
15:52:29.775 3095|    Mail,
15:52:29.776 
15:52:29.776 The symbol "Phone" has already been declared
15:52:29.776 3092|    Lock,
15:52:29.776 3093|    Unlock,
15:52:29.776 3094|    Phone,
15:52:29.776    |    ^
15:52:29.776 3095|    Mail,
15:52:29.776 3096|    MapPin,
15:52:29.776 
15:52:29.776 The symbol "Mail" has already been declared
15:52:29.776 3093|    Unlock,
15:52:29.776 3094|    Phone,
15:52:29.776 3095|    Mail,
15:52:29.776    |    ^
15:52:29.776 3096|    MapPin,
15:52:29.776 3097|    KeyRound,
15:52:29.776 
15:52:29.776 The symbol "MapPin" has already been declared
15:52:29.776 3094|    Phone,
15:52:29.776 3095|    Mail,
15:52:29.776 3096|    MapPin,
15:52:29.776    |    ^
15:52:29.776 3097|    KeyRound,
15:52:29.776 3098|    UserPlus,
15:52:29.776 
15:52:29.776 The symbol "KeyRound" has already been declared
15:52:29.776 3095|    Mail,
15:52:29.776 3096|    MapPin,
15:52:29.776 3097|    KeyRound,
15:52:29.776    |    ^
15:52:29.777 3098|    UserPlus,
15:52:29.777 3099|    Cloud,
15:52:29.777 
15:52:29.777 The symbol "UserPlus" has already been declared
15:52:29.777 3096|    MapPin,
15:52:29.777 3097|    KeyRound,
15:52:29.777 3098|    UserPlus,
15:52:29.777    |    ^
15:52:29.777 3099|    Cloud,
15:52:29.777 3100|    CloudRain,
15:52:29.777 
15:52:29.777 The symbol "Cloud" has already been declared
15:52:29.777 3097|    KeyRound,
15:52:29.777 3098|    UserPlus,
15:52:29.777 3099|    Cloud,
15:52:29.777    |    ^
15:52:29.777 3100|    CloudRain,
15:52:29.777 3101|    Sliders,
15:52:29.777 
15:52:29.777 The symbol "CloudRain" has already been declared
15:52:29.777 3098|    UserPlus,
15:52:29.777 3099|    Cloud,
15:52:29.777 3100|    CloudRain,
15:52:29.777    |    ^
15:52:29.777 3101|    Sliders,
15:52:29.777 3102|    Check
15:52:29.777 
15:52:29.778 The symbol "Sliders" has already been declared
15:52:29.778 3099|    Cloud,
15:52:29.778 3100|    CloudRain,
15:52:29.778 3101|    Sliders,
15:52:29.778    |    ^
15:52:29.778 3102|    Check
15:52:29.778 3103|  } from 'lucide-react';
15:52:29.778 
15:52:29.778 The symbol "Check" has already been declared
15:52:29.778 3100|    CloudRain,
15:52:29.778 3101|    Sliders,
15:52:29.778 3102|    Check
15:52:29.778    |    ^
15:52:29.778 3103|  } from 'lucide-react';
15:52:29.778 3104|  import {
15:52:29.778 
15:52:29.778 The symbol "ResponsiveContainer" has already been declared
15:52:29.778 3103|  } from 'lucide-react';
15:52:29.778 3104|  import {
15:52:29.778 3105|    ResponsiveContainer,
15:52:29.778    |    ^
15:52:29.778 3106|    ComposedChart,
15:52:29.778 3107|    Bar,
15:52:29.778 
15:52:29.778 The symbol "ComposedChart" has already been declared
15:52:29.778 3104|  import {
15:52:29.778 3105|    ResponsiveContainer,
15:52:29.779 3106|    ComposedChart,
15:52:29.779    |    ^
15:52:29.779 3107|    Bar,
15:52:29.779 3108|    Line,
15:52:29.779 
15:52:29.779 The symbol "Bar" has already been declared
15:52:29.779 3105|    ResponsiveContainer,
15:52:29.779 3106|    ComposedChart,
15:52:29.779 3107|    Bar,
15:52:29.779    |    ^
15:52:29.779 3108|    Line,
15:52:29.779 3109|    XAxis,
15:52:29.779 
15:52:29.779 The symbol "Line" has already been declared
15:52:29.779 3106|    ComposedChart,
15:52:29.779 3107|    Bar,
15:52:29.779 3108|    Line,
15:52:29.779    |    ^
15:52:29.779 3109|    XAxis,
15:52:29.779 3110|    YAxis,
15:52:29.779 
15:52:29.779 The symbol "XAxis" has already been declared
15:52:29.780 3107|    Bar,
15:52:29.780 3108|    Line,
15:52:29.780 3109|    XAxis,
15:52:29.780    |    ^
15:52:29.780 3110|    YAxis,
15:52:29.780 3111|    CartesianGrid,
15:52:29.780 
15:52:29.780 The symbol "YAxis" has already been declared
15:52:29.780 3108|    Line,
15:52:29.781 3109|    XAxis,
15:52:29.781 3110|    YAxis,
15:52:29.781    |    ^
15:52:29.781 3111|    CartesianGrid,
15:52:29.781 3112|    Tooltip,
15:52:29.781 
15:52:29.781 The symbol "CartesianGrid" has already been declared
15:52:29.781 3109|    XAxis,
15:52:29.782 3110|    YAxis,
15:52:29.782 3111|    CartesianGrid,
15:52:29.782    |    ^
15:52:29.782 3112|    Tooltip,
15:52:29.782 3113|    Legend,
15:52:29.782 
15:52:29.782 The symbol "Tooltip" has already been declared
15:52:29.782 3110|    YAxis,
15:52:29.782 3111|    CartesianGrid,
15:52:29.782 3112|    Tooltip,
15:52:29.782    |    ^
15:52:29.782 3113|    Legend,
15:52:29.783 3114|    PieChart,
15:52:29.783 
15:52:29.783 The symbol "Legend" has already been declared
15:52:29.783 3111|    CartesianGrid,
15:52:29.783 3112|    Tooltip,
15:52:29.784 3113|    Legend,
15:52:29.784    |    ^
15:52:29.784 3114|    PieChart,
15:52:29.784 3115|    Pie,
15:52:29.784 
15:52:29.784 The symbol "PieChart" has already been declared
15:52:29.784 3112|    Tooltip,
15:52:29.784 3113|    Legend,
15:52:29.784 3114|    PieChart,
15:52:29.784    |    ^
15:52:29.784 3115|    Pie,
15:52:29.785 3116|    Cell,
15:52:29.785 
15:52:29.785 The symbol "Pie" has already been declared
15:52:29.785 3113|    Legend,
15:52:29.785 3114|    PieChart,
15:52:29.785 3115|    Pie,
15:52:29.785    |    ^
15:52:29.785 3116|    Cell,
15:52:29.785 3117|    BarChart
15:52:29.785 
15:52:29.785 The symbol "Cell" has already been declared
15:52:29.785 3114|    PieChart,
15:52:29.785 3115|    Pie,
15:52:29.785 3116|    Cell,
15:52:29.785    |    ^
15:52:29.785 3117|    BarChart
15:52:29.785 3118|  } from 'recharts';
15:52:29.785 
15:52:29.786 The symbol "BarChart" has already been declared
15:52:29.786 3115|    Pie,
15:52:29.786 3116|    Cell,
15:52:29.786 3117|    BarChart
15:52:29.786    |    ^
15:52:29.787 3118|  } from 'recharts';
15:52:29.787 3119|  
15:52:29.787 
15:52:29.787 The symbol "createClient" has already been declared
15:52:29.787 3118|  } from 'recharts';
15:52:29.787 3119|  
15:52:29.787 3120|  import { createClient } from '@supabase/supabase-js';
15:52:29.788    |           ^
15:52:29.788 3121|  
15:52:29.788 3122|  // Inicialização Supabase direta
15:52:29.788 
15:52:29.788 The symbol "supabaseUrl" has already been declared
15:52:29.788 3121|  
15:52:29.789 3122|  // Inicialização Supabase direta
15:52:29.789 3123|  const supabaseUrl = "https://fhmgpgqqhcbxuqmpjrlh.supabase.co";
15:52:29.789    |        ^
15:52:29.795 3124|  const supabaseKey = "[REDACTED]";
15:52:29.796 3125|  const supabase = createClient(supabaseUrl, supabaseKey);
15:52:29.796 
15:52:29.796 The symbol "supabaseKey" has already been declared
15:52:29.797 3122|  // Inicialização Supabase direta
15:52:29.797 3123|  const supabaseUrl = "https://fhmgpgqqhcbxuqmpjrlh.supabase.co";
15:52:29.797 3124|  const supabaseKey = "[REDACTED]";
15:52:29.797    |        ^
15:52:29.797 3125|  const supabase = createClient(supabaseUrl, supabaseKey);
15:52:29.797 3126|  
15:52:29.797 
15:52:29.798 The symbol "supabase" has already been declared
15:52:29.798 3123|  const supabaseUrl = "https://fhmgpgqqhcbxuqmpjrlh.supabase.co";
15:52:29.798 3124|  const supabaseKey = "[REDACTED]";
15:52:29.798 3125|  const supabase = createClient(supabaseUrl, supabaseKey);
15:52:29.798    |        ^
15:52:29.798 3126|  
15:52:29.798 3127|  // ============================================================================
15:52:29.798 
15:52:29.798 The symbol "GrupoMartinsLogo" has already been declared
15:52:29.798 3128|  // 1. COMPONENTE DA LOGO OFICIAL VETORIZADA — GRUPO MARTINS
15:52:29.798 3129|  // ============================================================================
15:52:29.798 3130|  const GrupoMartinsLogo = ({ size = 'md', theme = 'cream', className = '' }) => {
15:52:29.798    |        ^
15:52:29.798 3131|    const isDarkBg = theme === 'dark';
15:52:29.798 3132|    const primaryColor = isDarkBg ? '#F8F3EF' : '#1B3B2B';
15:52:29.798 
15:52:29.798 The symbol "MONTHS" has already been declared
15:52:29.798 3309|  };
15:52:29.798 3310|  
15:52:29.798 3311|  const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
15:52:29.798    |        ^
15:52:29.798 3312|  const MONTH_NAMES_MAP = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
15:52:29.798 3313|  
15:52:29.798 
15:52:29.798 The symbol "MONTH_NAMES_MAP" has already been declared
15:52:29.798 3310|  
15:52:29.798 3311|  const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
15:52:29.799 3312|  const MONTH_NAMES_MAP = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
15:52:29.799    |        ^
15:52:29.799 3313|  
15:52:29.799 3314|  const ANOS_DRE = Array.from({ length: 15 }, (_, i) => 2026 + i);
15:52:29.799 
15:52:29.799 The symbol "ANOS_DRE" has already been declared
15:52:29.799 3312|  const MONTH_NAMES_MAP = { '01': 'Jan', '02': 'Fev', '03': 'Mar', '04': 'Abr', '05': 'Mai', '06': 'Jun', '07': 'Jul', '08': 'Ago', '09': 'Set', '10': 'Out', '11': 'Nov', '12': 'Dez' };
15:52:29.799 3313|  
15:52:29.799 3314|  const ANOS_DRE = Array.from({ length: 15 }, (_, i) => 2026 + i);
15:52:29.799    |        ^
15:52:29.799 3315|  
15:52:29.799 3316|  const INITIAL_PLANO_CONTAS = {
15:52:29.799 
15:52:29.799 The symbol "INITIAL_PLANO_CONTAS" has already been declared
15:52:29.799 3314|  const ANOS_DRE = Array.from({ length: 15 }, (_, i) => 2026 + i);
15:52:29.799 3315|  
15:52:29.799 3316|  const INITIAL_PLANO_CONTAS = {
15:52:29.799    |        ^
15:52:29.799 3317|    receitas: [
15:52:29.799 3318|      { codigo: '1.1.01', nome: '1.1.01 — Licenciamento Ambiental (LP / LI / LO)' },
15:52:29.799 
15:52:29.799 The symbol "INITIAL_PARAMETERS" has already been declared
15:52:29.799 3338|  };
15:52:29.799 3339|  
15:52:29.799 3340|  const INITIAL_PARAMETERS = {
15:52:29.799    |        ^
15:52:29.799 3341|    saldoInicialCaixa: 35000,
15:52:29.799 3342|    metaMensalReceita: 38000,
15:52:29.799 
15:52:29.799 The symbol "DEFAULT_PERMISSIONS" has already been declared
15:52:29.799 3349|  };
15:52:29.799 3350|  
15:52:29.799 3351|  const DEFAULT_PERMISSIONS = {
15:52:29.799    |        ^
15:52:29.799 3352|    dashboard: { view: true, create: false, edit: false, delete: false, approve: false },
15:52:29.799 3353|    prolabore: { view: false, create: false, edit: false, delete: false, approve: false },
15:52:29.799 
15:52:29.799 The symbol "INITIAL_ACCESS_ROLES" has already been declared
15:52:29.799 3360|  };
15:52:29.799 3361|  
15:52:29.799 3362|  const INITIAL_ACCESS_ROLES = [
15:52:29.799    |        ^
15:52:29.799 3363|    {
15:52:29.799 3364|      id: 'ROLE-01-PEDRO',
15:52:29.799 
15:52:29.799 The symbol "INITIAL_CONDICIONANTES" has already been declared
15:52:29.800 3383|  ];
15:52:29.800 3384|  
15:52:29.800 3385|  const INITIAL_CONDICIONANTES = [
15:52:29.800    |        ^
15:52:29.800 3386|    {
15:52:29.800 3387|      id: 'COND-01',
15:52:29.800 
15:52:29.800 The symbol "formatCurrency" has already been declared
15:52:29.800 3446|  ];
15:52:29.800 3447|  
15:52:29.800 3448|  const formatCurrency = (val) => {
15:52:29.800    |        ^
15:52:29.800 3449|    if (val === undefined || val === null || isNaN(val)) return 'R$ 0,00';
15:52:29.800 3450|    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(val);
15:52:29.800 
15:52:29.800 Multiple exports with the same name "default"
15:52:29.800 3451|  };
15:52:29.800 3452|  
15:52:29.800 3453|  export default function App() {
15:52:29.800    |         ^
15:52:29.800 3454|    const [activeTab, setActiveTab] = useState('dashboard');
15:52:29.800 3455|    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
15:52:29.800 
15:52:29.800 The symbol "App" has already been declared
15:52:29.800 3451|  };
15:52:29.800 3452|  
15:52:29.800 3453|  export default function App() {
15:52:29.800    |                          ^
15:52:29.800 3454|    const [activeTab, setActiveTab] = useState('dashboard');
15:52:29.800 3455|    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
15:52:29.800 
15:52:29.800     at failureErrorWithLog (/vercel/path0/node_modules/esbuild/lib/main.js:1472:15)
15:52:29.800     at /vercel/path0/node_modules/esbuild/lib/main.js:755:50
15:52:29.800     at responseCallbacks.<computed> (/vercel/path0/node_modules/esbuild/lib/main.js:622:9)
15:52:29.800     at handleIncomingPacket (/vercel/path0/node_modules/esbuild/lib/main.js:677:12)
15:52:29.800     at Socket.readFromStdout (/vercel/path0/node_modules/esbuild/lib/main.js:600:7)
15:52:29.800     at Socket.emit (node:events:514:20)
15:52:29.800     at addChunk (node:internal/streams/readable:605:12)
15:52:29.800     at readableAddChunkPushByteMode (node:internal/streams/readable:556:3)
15:52:29.800     at Readable.push (node:internal/streams/readable:436:5)
15:52:29.800     at Pipe.onStreamRead (node:internal/stream_base_commons:194:23)
15:52:29.810 Error: [BUILD_UTILS_SPAWN_1] Command "npm run build" exited with 1
