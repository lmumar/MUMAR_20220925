# frozen_string_literal: true

module AssetsHelper
  def inline_js(name)
    %(<script type="text/javascript">#{read_file_from_public(file_path(name))}</script>).html_safe
  end

  def include_js(name)
    path = hosted_file_path(name)
    if path.present?
      %(<script type="text/javascript" src="#{path}"></script>).html_safe
    else
      ''
    end
  end

  def include_main_css
    path = hosted_file_path('', type: 'css')
    if path.present?
      %(<link rel="stylesheet" href=#{path}>).html_safe
    else
      ''
    end
  end

  private

  def asset_manifest
    @asset_manifest ||= JSON.parse(read_file_from_public('bundles/asset-manifest.json'))
  end

  def file_path(name, type: 'js')
    path = Array.wrap(asset_manifest.dig(name, type)).compact.first
    path.present? ? path : ''
  end

  def hosted_file_path(name, type: 'js')
    path = file_path(name, type:)
    if path.present?
      # For now, it will just refer to local path. In live we can have a configuration
      # file that contains the cdn host where we hosted these assets.
      File.join('/', normalize_path(path))
    else
      ''
    end
  end

  def normalize_path(path)
    path.gsub(%r{^\.\./public/}, '')
  end

  def read_file_from_public(path)
    File.read(Rails.root.join('public', path))
  end
end
