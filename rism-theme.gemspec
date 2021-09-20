# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "rism-theme"
  spec.version       = "0.1.65"
  spec.authors       = ["Rodolfo Zitellini", "Andrew Hankinson", "Laurent Pugin"]
  spec.email         = ["rodolfo.zitellini@rism-ch.org", "andrew.hankinson@rism.digital", "laurent.pugin@rism.digital"]

  spec.summary       = "Shared theme for RISM websites."
  spec.homepage      = "http://www.rism.info"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }

  spec.add_runtime_dependency "jekyll", "~> 4.1"
end
