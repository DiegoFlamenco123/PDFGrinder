import { DndContext, closestCenter, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy } from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import type { FileWithPreview } from "../types/FileWithPreview";
import type { DragEndEvent } from "@dnd-kit/core";

type Props = {
  files: FileWithPreview[];
  onRemove: (id: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
};

export default function FileList({ files, onRemove, onDragEnd }: Props) {
  const sensors = useSensors(useSensor(PointerSensor));

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={files.map((f) => f.id)} strategy={horizontalListSortingStrategy}>
        <div className="flex flex-wrap gap-4 overflow-auto">
          {files.map(({ id, file, url }) => (
            <SortableItem key={id} id={id} file={file} url={url} onRemove={() => onRemove(id)} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
