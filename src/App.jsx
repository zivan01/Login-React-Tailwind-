import { useState } from "react";
import "./index.css";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-indigo-100 via-blue-100 to-sky-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl ring-1 ring-black/5 dark:bg-slate-800/70 dark:ring-white/10 overflow-hidden">
            <div className="px-8 pt-8 text-center">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0c2.5-2.5 4-5.5 4-9s-1.5-6.5-4-9m0 18c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9M3 12h18"
                  />
                </svg>
              </div>

              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Sign in to your account
              </h1>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                .Welcome back! Enter your credentials to continue
              </p>
            </div>

            <div className="px-8 pb-8 pt-6">
              <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                <div>
                  <label
                    htmlFor="username"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Username
                  </label>
                  <input
                    name="username"
                    id="username"
                    type="text"
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-600 dark:bg-slate-900/40 dark:focus:border-indigo-400"
                    placeholder="e.g., johndoe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-200"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <input
                      name="password"
                      id="password"
                      type={showPwd ? "text" : "password"}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-xl border border-slate-300 bg-white/60 px-4 py-3 pr-12 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/40 dark:border-slate-600 dark:bg-slate-900/40 dark:focus:border-indigo-400"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      aria-label={showPwd ? "Hide password" : "Show password"}
                      className="absolute inset-y-0 right-0 grid w-12 place-items-center text-slate-500 hover:text-slate-700 dark:text-slate-400"
                      onClick={() => setShowPwd((v) => !v)}
                    >
                      {showPwd ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 15.58 7.21 18 12 18c.847 0 1.67-.095 2.455-.274M6.228 6.228A10.45 10.45 0 0 1 12 6c4.79 0 8.774 2.42 10.066 6-.447 1.295-1.232 2.46-2.271 3.42M3 3l18 18M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          className="h-5 w-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.423 7.51 7.36 5 12 5c4.64 0 8.577 2.51 9.964 6.678.089.27.089.562 0 .644C20.577 16.49 16.64 19 12 19c-4.64 0-8.577-2.51-9.964-6.678Z"
                          />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between text-sm">
                    <label className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
                      <input
                        type="checkbox"
                        className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 dark:border-slate-600"
                        onChange={() => {}}
                      />
                      Remember me
                    </label>
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      ?Forgot password
                    </a>
                  </div>
                </div>

                <button
                  name="login"
                  id="submit_btn"
                  type="submit"
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 px-4 py-3.5 font-medium text-white shadow-lg transition hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="relative z-10">Sign in</span>
                  <span className="absolute inset-0 -translate-x-full bg-white/20 transition group-hover:translate-x-0 cursor-pointer" />
                </button>

                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                  <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    or
                  </span>
                  <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    className="cursor-pointer rounded-xl border border-slate-300 bg-white/70 px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:shadow hover:text-indigo-950 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
                  >
                    Continue with Google
                  </button>
                  <button
                    type="button"
                    className="cursor-pointer rounded-xl border border-slate-300 bg-white/70 px-3 py-2.5 text-sm font-medium text-slate-800 shadow-sm transition hover:bg-white hover:shadow hover:text-indigo-950 dark:border-slate-600 dark:bg-slate-900/40 dark:text-slate-200"
                  >
                    Continue with GitHub
                  </button>
                </div>
              </form>
            </div>

            <div className="bg-slate-50/70 px-8 py-5 text-center dark:bg-slate-900/30">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                .Don’t have an account?
                <a
                  href="#"
                  className="mx-1 font-semibold text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
                >
                  Create one
                </a>
                — it’s free
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} • By Zivan – TailwindCSS, React
          </p>
        </div>
      </div>
    </div>
  );
};

export default App;

