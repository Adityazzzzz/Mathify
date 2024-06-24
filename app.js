let btn = document.querySelectorAll("#btn");
let text = document.querySelector("#text");
let answer = document.querySelector("#answer");

const con_to_sym = (sym) => {
    const symbolMap = {
        'alpha': 'α',
        'beta': 'β',
        'gamma': 'γ',
        'delta': 'δ',
        'epsilon': 'ε',
        'zeta': 'ζ',
        'eta': 'η',
        'theta': 'θ',
        'iota': 'ι',
        'kappa': 'κ',
        'lambda': 'λ',
        'mu': 'μ',
        'nu': 'ν',
        'xi': 'ξ',
        'omicron': 'ο',
        'pi': 'π',
        'rho': 'ρ',
        'sigma': 'σ',
        'tau': 'τ',
        'upsilon': 'υ',
        'phi': 'φ',
        'chi': 'χ',
        'psi': 'ψ',
        'omega': 'ω',
        'integral': '∫',
        'double-integral': '∬',
        'triple-integral': '∭',
        'contour-integral': '∮',
        'del': '∇',
        'summation': '∑',
        'product': '∏',
        'infinity': '∞',
        'partial-derivative': '∂',
        'derivative': 'd',
        'limit': 'lim',
        'parallel': '∥',
        'perpendicular': '⊥',
        'degree': '∘',
        'angle': '∠',
        'implies': '⇒',
        'if-and-only-if': '⇔',
        'and': '∧',
        'or': '∨',
        'for-all': '∀',
        'there-exists': '∃',
        'equal': '=',
        'not-equal': '≠',
        'less-than': '<',
        'more-than': '>',
        'less-than-or-equal-to': '≤',
        'greater-than-or-equal-to': '≥',
        '`0': '₀',
        '`1': '₁',
        '`2': '₂',
        '`3': '₃',
        '`4': '₄',
        '`5': '₅',
        '`6': '₆',
        '`7': '₇',
        '`8': '₈',
        '`9': '₉',
        '^0': '⁰',
        '^1': '¹',
        '^2': '²',
        '^3': '³',
        '^4': '⁴',
        '^5': '⁵',
        '^6': '⁶',
        '^7': '⁷',
        '^8': '⁸',
        '^9': '⁹'
    };

    const words = sym.split(/\s+/);
    const symbols = words.map(word => symbolMap[word.toLowerCase()] || word);

    return symbols.join(' ');
};

btn.forEach((btnElement) => {
    btnElement.addEventListener("click", () => {
        const math_text = text.value;
        const mathsymbol = con_to_sym(math_text);
        answer.innerText = answer.innerText + mathsymbol;
    });
});

clear.addEventListener("click", () => {
    answer.innerText = "";
});

How to use:

Clone the repository
open index.html