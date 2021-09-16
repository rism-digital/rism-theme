
{% assign search_title = site.data.locales | where: "id", "search-title" | first %}
{% assign search_criteria = site.data.locales | where: "id", "search-criteria" | first %}
{% assign search_lang_any = site.data.locales | where: "id", "search-lang-any" | first %}
<h1>{{ search_criteria.name[site.active_lang] }}</h1>

{% assign action = "/search.html" %}
{% if site.active_lang != "en" %}{% assign action = "/" | append: site.active_lang | append: action"  %}{% endif %}
<form action="{{ action }}">
    <div class="field">
        <div class="control">
            <input id="website-search" class="input is-small" type="text" name="q" placeholder="{{ search_title.name[site.active_lang] }} ... ">
        </div>
    </div>
    <div class="field">
        <p class="control has-icons-left">
            <span class="select is-small is-fullwidth">
                <select id="website-search-lang" name="lang">
                        <option {% if site.active_lang == "en" %}selected{% endif %} value="xxen">English</option>
                        {% if site.languages contains 'de' %}<option {% if site.active_lang == "de" %}selected{% endif %} value="xxde">Deutsch</option>{% endif %}
                        {% if site.languages contains 'fr' %}<option {% if site.active_lang == "fr" %}selected{% endif %} value="xxfr">Français</option>{% endif %}
                        {% if site.languages contains 'it' %}<option {% if site.active_lang == "it" %}selected{% endif %} value="xxit">Italiano</option>{% endif %}
                        <option value="any">{{ search_lang_any.name[site.active_lang] }}</option>
                </select>
            </span>
            <span class="icon is-small is-left">
                <i class="fas fa-globe"></i>
            </span>
        </p>
    </div>
    <button type="submit" class="button is-small is-dark">
        <span class="icon is-small">
            <i class="fas fa-search"></i>
        </span>
    </button>
</form>

