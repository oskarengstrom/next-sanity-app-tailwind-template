import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { colorInput } from "@sanity/color-input";
// import {media} from 'sanity-plugin-media'
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Global")
              .icon(() => "🌍")
              .child(
                S.list()
                  .title("Global")
                  .items([
                    S.listItem()
                      .title("Header")
                      .id("header")
                      .icon(() => "👒")
                      .child(
                        S.document().schemaType("header").documentId("header")
                      ),
                    // S.listItem()
                    //   .title('Footer')
                    //   .id('footer')
                    //   .icon(() => '👠')
                    //   .child(S.document().schemaType('footer').documentId('footer')),
                    // S.listItem()
                    //   .title('SEO global')
                    //   .id('seoGlobal')
                    //   .icon(() => '🔍')
                    //   .child(S.document().schemaType('seoGlobal').documentId('seoGlobal')),
                    // S.listItem()
                    //   .title('Sizes')
                    //   .icon(() => '📏')
                    //   .child(S.documentTypeList('size').title('Sizes')),
                    // S.listItem()
                    //   .title('Themes')
                    //   .icon(() => '🎨')
                    //   .child(S.documentTypeList('theme').title('Themes')),
                  ])
              ),

            S.listItem()
              .title("Pages")
              .icon(() => "📝")
              .child(S.documentTypeList("page").title("Pages")),

            // S.listItem()
            //   .title('Entities')
            //   .icon(() => '📚')
            //   .child(
            //     S.list()
            //       .title('Entities')
            //       .items([
            //         S.listItem()
            //           .title('Companies')
            //           .icon(() => '🏢')
            //           .child(S.documentTypeList('company').title('Companies')),
            //       ])
            //   ),
          ]),
    }),

    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    colorInput(),
    // media(),
    unsplashImageAsset(),
    vercelDeployTool(),
  ],
});
