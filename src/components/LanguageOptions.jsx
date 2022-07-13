import '../scss/languageOptions.scss';

export function LanguageOptions() {
    return(
        <div className="selectLanguage">
            <span className="fas icon">&#xf0ac;</span>

            <select name="language" id="language">
                <option value="Português">Português</option>
                <option value="English">English</option>
            </select>

            <span className="material-icons">&#xe5c5;</span>
        </div>
    );
}