"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Eye, EyeOff, KeyRound } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Simple mock authorization check
    if (!email || !password) {
      setError("Please fill in both fields to authenticate.");
      setLoading(false);
      return;
    }

    // Direct redirection to simulate login
    setTimeout(() => {
      setLoading(false);
      // Set the authorization cookie
      document.cookie = "studio_session=authenticated; path=/; max-age=3600; SameSite=Lax";
      router.push("/admin/dashboard");
      router.refresh();
    }, 800);
  };

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md bg-white border border-studio-border p-8 md:p-10 space-y-8 relative">
        {/* Top structural accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-studio-accent"></div>

        {/* Form Header */}
        <div className="text-center space-y-2">
          <div className="mx-auto w-10 h-10 bg-studio-bg border border-studio-border flex items-center justify-center text-studio-accent mb-4">
            <Lock size={18} />
          </div>
          <span className="text-xxs uppercase tracking-blueprint text-studio-muted font-sans font-bold block">
            Studio Portal
          </span>
          <h1 className="text-2xl font-serif font-light text-studio-dark uppercase tracking-wide">
            CMS Workspace
          </h1>
          <p className="text-xs font-sans font-light text-studio-muted">
            Authorized administrative access only.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-amber-50 border border-amber-200 text-amber-800 text-xs px-4 py-3 font-sans font-light">
              {error}
            </div>
          )}

          {/* Email field */}
          <div className="space-y-1">
            <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@studiointerlace.com"
              className="input-field text-xs"
              required
            />
          </div>

          {/* Password field */}
          <div className="space-y-1 relative">
            <label className="text-xxs uppercase tracking-architect font-sans font-medium text-studio-dark block">
              Access Code
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="input-field text-xs pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-2.5 text-studio-muted hover:text-studio-dark transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              {loading ? (
                <span className="text-xs font-sans lowercase">Validating credentials...</span>
              ) : (
                <>
                  <KeyRound size={14} />
                  <span>Authenticate Access</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Notice Info */}
        <div className="border-t border-studio-border/30 pt-4 text-xxs font-sans font-light text-studio-muted text-center leading-relaxed">
          Log in with any active email address to verify functionality. This session will auto-expire on console logout.
        </div>
      </div>
    </div>
  );
}
