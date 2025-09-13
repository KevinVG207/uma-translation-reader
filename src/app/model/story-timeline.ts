export interface StoryTimeline {
  no_wrap: boolean;
  text_block_list: {
    name?: string;
    text: string;
    choice_data_list?: string[];
  }[];
}
