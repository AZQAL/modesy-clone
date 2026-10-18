import os
import sys

# Folder yang dilewati
SKIP_DIRS = {"node_modules", ".next", ".git", "dist", "build", ".vercel", ".turbo"}

# Ekstensi file yang disertakan
INCLUDE_EXTS = {".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss",
                ".md", ".mdx", ".sql", ".env", ".yml", ".yaml", ".toml",
                ".html", ".txt", ".mjs", ".cjs"}

# File tanpa ekstensi yang tetap disertakan
INCLUDE_FILES = {".env.local", ".env.example", "middleware.ts", "middleware.js"}

def should_include(filename):
    if filename in INCLUDE_FILES:
        return True
    _, ext = os.path.splitext(filename)
    return ext.lower() in INCLUDE_EXTS

def dump_project(root, out_file):
    lines = []
    lines.append(f"# Struktur dan Kode Proyek: {os.path.basename(root)}\n")

    # Struktur folder
    lines.append("## Struktur Direktori\n```")
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        level = dirpath.replace(root, "").count(os.sep)
        indent = "  " * level
        lines.append(f"{indent}{os.path.basename(dirpath)}/")
        for f in sorted(filenames):
            if should_include(f):
                lines.append(f"{indent}  {f}")
    lines.append("```\n")

    # Isi file
    lines.append("## Isi File\n")
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if d not in SKIP_DIRS]
        for f in sorted(filenames):
            if not should_include(f):
                continue
            full = os.path.join(dirpath, f)
            rel = os.path.relpath(full, root).replace("\\", "/")
            try:
                with open(full, "r", encoding="utf-8", errors="ignore") as fh:
                    content = fh.read()
            except Exception as e:
                content = f"[Gagal membaca file: {e}]"
            lines.append(f"### `{rel}`\n```")
            lines.append(content.rstrip())
            lines.append("```\n")

    with open(out_file, "w", encoding="utf-8") as fh:
        fh.write("\n".join(lines))
    print(f"Selesai. File output: {out_file}")
    print(f"Ukuran: {os.path.getsize(out_file) / 1024:.1f} KB")

if __name__ == "__main__":
    root = os.path.dirname(os.path.abspath(__file__))
    out = os.path.join(root, "project_dump.md")
    dump_project(root, out)